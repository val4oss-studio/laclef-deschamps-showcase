import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { legalLinks, navLinks } from '@/config/navigation';

import { Horizon } from './Horizon';
import { site } from '@/config/site';

/** Taille source du badge ; le rendu est piloté par `.footer-logo`. */
const LOGO_SIZE = 256;

export function Footer(): JSX.Element {
  return (
    <>
      {/* Même entrée en section « mer » que sur la page d'accueil. */}
      <Horizon />

      <footer className="footer">
        <div className="section-inner">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link
                href="/"
                className="footer-brand-link"
                aria-label={`${site.name} — accueil`}
              >
                <Image
                  src="/brand/logo-256.png"
                  alt=""
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  className="footer-logo"
                />
              </Link>
              <p className="footer-description">{site.description}</p>
            </div>

            <nav className="footer-column" aria-label="Pages du site">
              <p className="eyebrow eyebrow--inverse">Le site</p>
              <ul className="footer-list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="footer-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="footer-column">
              <p className="eyebrow eyebrow--inverse">Nous joindre</p>
              <ul className="footer-list">
                <li>
                  <a href={site.contact.phoneHref} className="footer-link">
                    {site.contact.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.contact.email}`} className="footer-link">
                    {site.contact.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-meta">
              © {new Date().getFullYear()} {site.name}
            </p>

            <nav className="footer-legal" aria-label="Informations légales">
              {legalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-legal-link">
                  {link.label}
                </Link>
              ))}
            </nav>

            <p className="footer-meta">
              Fait par{' '}
              <a
                href={site.author.url}
                className="footer-meta-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.author.name}
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
