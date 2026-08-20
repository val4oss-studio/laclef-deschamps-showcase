'use client';
/*
 * Navbar — logo, onglets sur grand écran, menu plein écran sur téléphone.
 *
 * Client Component pour l'état d'ouverture du menu. Reprend le motif du
 * projet theboweryst : trois barres qui se plient en croix, panneau plein
 * écran translucide et flouté, défilement du corps verrouillé.
 */

import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { homeLink, navLinks } from '@/config/navigation';
import { site } from '@/config/site';

/** Taille source du badge ; le rendu est piloté par `--navbar-logo-size`. */
const LOGO_SIZE = 256;

export function Navbar(): JSX.Element {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  /* Fermeture au changement de page — le `onClick` des liens ne verrait ni le
     bouton Précédent ni une navigation programmatique. Ajusté pendant le rendu
     et non dans un effet : c'est le motif recommandé par React pour réinitialiser
     un état dérivé, et il évite d'afficher une image avec le menu encore ouvert. */
  if (lastPath !== pathname) {
    setLastPath(pathname);
    setIsOpen(false);
  }

  return (
    <header className="navbar" data-menu-open={isOpen}>
      <div className="navbar-inner">
        <Link href="/" className="navbar-brand" aria-label={`${site.name} — accueil`}>
          <Image
            src="/brand/logo-256.png"
            alt=""
            width={LOGO_SIZE}
            height={LOGO_SIZE}
            className="navbar-logo"
            priority
          />
        </Link>

        <nav className="navbar-nav" aria-label="Navigation principale">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="navbar-link">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* `aria-expanded` sert aussi de sélecteur à l'animation : l'état n'est
            écrit qu'une fois, il ne peut pas désynchroniser du visuel. */}
        <button
          type="button"
          className="navbar-burger"
          aria-expanded={isOpen}
          aria-controls="navbar-panel"
          aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span className="navbar-burger-line" />
          <span className="navbar-burger-line" />
          <span className="navbar-burger-line" />
        </button>
      </div>

      {/* Le clic sur le voile ferme aussi : sur téléphone c'est le geste attendu.
          Simple redondance — la croix et la touche Échap restent les chemins
          accessibles au clavier, ce bloc n'a donc pas à être focusable. */}
      <div
        className="navbar-panel"
        id="navbar-panel"
        data-open={isOpen}
        onClick={() => setIsOpen(false)}
      >
        <nav className="navbar-panel-nav" aria-label="Navigation">
          {[homeLink, ...navLinks].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="navbar-panel-link"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
