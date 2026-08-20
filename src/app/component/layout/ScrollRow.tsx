'use client';
/*
 * ScrollRow — Bandeau horizontal défilant, sur une seule ligne.
 *
 * Le défilement natif (doigt, trackpad, clavier) reste la référence ; les deux
 * flèches ne sont qu'un rattrapage souris. Chaque clic avance d'exactement une
 * carte, largeur lue sur le premier enfant pour rester juste à tous les
 * points de rupture.
 *
 * Usage :
 *   <ScrollRow label="…" previousLabel="…" nextLabel="…">…cartes…</ScrollRow>
 */

import { useEffect, useRef, useState } from 'react';
import type { JSX, ReactNode } from 'react';

interface ScrollRowProps {
  /** Nom accessible de la zone défilante. */
  label: string;
  previousLabel: string;
  nextLabel: string;
  className?: string;
  children: ReactNode;
}

interface ChevronIconProps {
  d: string;
}

/** Marge d'arrondi sous-pixel : évite une flèche active alors qu'on est en butée. */
const EDGE_TOLERANCE = 4;

const CHEVRON_LEFT = 'M15 18l-6-6 6-6';
const CHEVRON_RIGHT = 'M9 6l6 6-6 6';

export function ScrollRow({
  label,
  previousLabel,
  nextLabel,
  className,
  children,
}: ScrollRowProps): JSX.Element {
  const trackRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  /* Optimiste : au rendu serveur on suppose qu'il y a de quoi défiler, sinon
     les chevrons apparaîtraient après coup sur les bandeaux qui débordent. */
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const syncEdges = (): void => {
      const maxScroll = track.scrollWidth - track.clientWidth;
      setAtStart(track.scrollLeft <= EDGE_TOLERANCE);
      setAtEnd(track.scrollLeft >= maxScroll - EDGE_TOLERANCE);
    };

    syncEdges();
    track.addEventListener('scroll', syncEdges, { passive: true });
    // La largeur des cartes suit le viewport : les butées bougent au redimensionnement.
    const observer = new ResizeObserver(syncEdges);
    observer.observe(track);

    return () => {
      track.removeEventListener('scroll', syncEdges);
      observer.disconnect();
    };
  }, []);

  const scrollByStep = (direction: number): void => {
    const track = trackRef.current;
    if (!track) return;

    const first = track.firstElementChild;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = first instanceof HTMLElement ? first.offsetWidth + gap : track.clientWidth;

    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  /* Les deux butées atteintes en même temps : le contenu tient sur une ligne. */
  const isScrollable = !atStart || !atEnd;

  // Ordre du DOM = ordre des colonnes de la grille, et ordre de tabulation.
  return (
    <div
      className={['scroll-row', className].filter(Boolean).join(' ')}
      data-scrollable={isScrollable}
    >
      <button
        type="button"
        className="scroll-row-arrow"
        onClick={() => scrollByStep(-1)}
        disabled={atStart}
        aria-label={previousLabel}
      >
        <ChevronIcon d={CHEVRON_LEFT} />
      </button>

      {/* Les butées pilotent aussi le fondu des bords, côté CSS. */}
      <div
        className="scroll-row-track"
        ref={trackRef}
        role="group"
        aria-label={label}
        tabIndex={0}
        data-at-start={atStart}
        data-at-end={atEnd}
      >
        {children}
      </div>

      <button
        type="button"
        className="scroll-row-arrow"
        onClick={() => scrollByStep(1)}
        disabled={atEnd}
        aria-label={nextLabel}
      >
        <ChevronIcon d={CHEVRON_RIGHT} />
      </button>
    </div>
  );
}

function ChevronIcon({ d }: ChevronIconProps): JSX.Element {
  return (
    <svg
      className="scroll-row-arrow-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={d} />
    </svg>
  );
}
