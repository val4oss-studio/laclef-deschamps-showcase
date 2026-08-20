import type { JSX } from 'react';
import Link from 'next/link';

import { RevealSection } from '@/app/component/layout';

interface CouchantSectionProps {
  id: string;
}

/**
 * Bandeau final : le dégradé du logo, du crème au corail.
 * Une seule occurrence par page — répété, il perd son effet.
 */
export function CouchantSection({ id }: CouchantSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section--filet">
      <div className="section-inner">
        <div className="couchant">
          <p className="eyebrow section-eyebrow">Nous confier votre bien</p>
          <h2 className="section-title">Confiez-nous vos clés</h2>
          <p className="section-lead">
            Un échange, une visite, et nous prenons le relais : annonce,
            réservations, accueil des voyageurs et entretien. Vous gardez la main
            sur votre logement, nous gérons le quotidien.
          </p>
          <div className="section-actions">
            <Link href="/contact" className="btn btn--primary">
              Nous contacter
            </Link>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
