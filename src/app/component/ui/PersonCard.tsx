'use client';
/*
 * PersonCard — Carte de membre d'équipe, en flottaison, avec inclinaison 3D
 * au survol. Client Component pour les deux gestionnaires de souris.
 *
 * Quatre propriétés indépendantes, une par effet, pour qu'aucun ne réécrive
 * un autre :
 *   opacity + scale  → apparition au défilement (transition, CSS)
 *   translate        → flottement continu (@keyframes floating, CSS)
 *   transform        → inclinaison au survol (inline, ici)
 */

import { useRef } from 'react';
import type { CSSProperties, JSX, MouseEvent } from 'react';
import Image from 'next/image';

interface PersonCardProps {
  name: string;
  role: string;
  sentence: string;
  avatar: string;
  avatarAlt: string;
  /** Sert à décaler flottement et apparition d'une carte à l'autre. */
  index: number;
}

/** Amplitude de l'inclinaison, en degrés : perceptible sans donner le tournis. */
const TILT_MAX_Y = 8;
const TILT_MAX_X = 5;

/** Côté source de l'avatar ; le rendu est piloté par `.person-card-avatar`. */
const AVATAR_SIZE = 384;

/** Laisse l'apparition se terminer avant que le flottement ne démarre. */
const FLOATING_START = 1700;

/*
 * Réglages de flottement, distribués sur les cartes par leur index.
 * Les durées sont volontairement désaccordées : avec des périodes qui ne sont
 * pas multiples les unes des autres, deux cartes ne repassent jamais en phase.
 * Des durées identiques, même décalées, ne produiraient qu'une vague.
 */
const FLOATING_PRESETS = [
  { duration: 7000, amplitude: 14, offset: 0 },
  { duration: 8300, amplitude: 10, offset: 1300 },
  { duration: 6100, amplitude: 17, offset: 2600 },
  { duration: 9200, amplitude: 12, offset: 900 },
  { duration: 7700, amplitude: 15, offset: 2100 },
] as const;

export function PersonCard({
  name,
  role,
  sentence,
  avatar,
  avatarAlt,
  index,
}: PersonCardProps): JSX.Element {
  const cardRef = useRef<HTMLElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLElement>): void {
    const card = cardRef.current;
    if (!card) return;
    // Le mouvement est décoratif : on le coupe pour qui a demandé moins d'animation.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const rect = card.getBoundingClientRect();
    const dx = (event.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (event.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);

    card.style.transform =
      `rotateX(${(-dy * TILT_MAX_X).toFixed(2)}deg) ` +
      `rotateY(${(dx * TILT_MAX_Y).toFixed(2)}deg)`;
  }

  function handleMouseLeave(): void {
    const card = cardRef.current;
    if (!card) return;
    // Le retour à plat est assuré par la transition définie en CSS.
    card.style.transform = '';
  }

  const floating = FLOATING_PRESETS[index % FLOATING_PRESETS.length];
  const style = {
    '--stagger-index': index,
    /* L'index s'ajoute au décalage du réglage : au-delà de cinq cartes, celles
       qui repartagent un réglage gardent malgré tout une phase distincte. */
    '--floating-delay': `${FLOATING_START + floating.offset + index * 130}ms`,
    '--floating-duration': `${floating.duration}ms`,
    '--floating-amplitude': `${floating.amplitude}px`,
  } as CSSProperties;

  return (
    <article
      ref={cardRef}
      className="person-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Le nom vit dans le portrait : c'est ce qui lui permet de remonter
          sur l'image sans décaler le reste de la carte. */}
      <div className="person-card-portrait">
        <Image
          src={avatar}
          alt={avatarAlt}
          width={AVATAR_SIZE}
          height={AVATAR_SIZE}
          className="person-card-avatar"
        />
        <p className="person-card-name">{name}</p>
      </div>
      <p className="person-card-role">{role}</p>
      <p className="person-card-sentence">{sentence}</p>
    </article>
  );
}
