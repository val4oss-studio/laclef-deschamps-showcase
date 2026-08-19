import type { JSX } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/config/site';

interface HeroSectionProps {
  id: string;
}

export function HeroSection({ id }: HeroSectionProps): JSX.Element {
  return (
    <section id={id} className="section section--first section--hero">
      <div className="section-inner section-inner--split">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Châtelaillon-Plage</p>
          <h1 className="section-title section-title--display">{site.name}</h1>
          <p className="section-subtitle">Services de conciergerie</p>
          <p className="section-lead">
            Bienvenue dans notre conciergerie familiale à Châtelaillon-Plage.
            Attachés à notre belle côte et à l&apos;accueil de qualité, nous
            accompagnons les propriétaires et leurs voyageurs avec attention,
            disponibilité et simplicité. Chaque logement est suivi avec soin pour
            offrir une expérience agréable et sereine.
          </p>
          <div className="section-actions">
            <Link href="/contact" className="btn btn--accent">
              Contactez-nous
            </Link>
          </div>
        </div>

        <div className="section-visual">
          <Image
            src="/brand/logo-1024.png"
            alt=""
            width={1024}
            height={1024}
            className="section-logo"
            priority
          />
        </div>
      </div>
    </section>
  );
}
