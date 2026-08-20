import type { JSX } from 'react';
import Link from 'next/link';

import { TarifCard } from '@/app/component/ui';
import { RevealSection } from '@/app/component/layout';
import { forfaits } from '@/config/tarif';

interface PrestationsSectionProps {
  id: string;
}

export function PrestationsSection({ id }: PrestationsSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--sable">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">À la carte</p>
          <h2 className="section-title">Ménage et blanchisserie</h2>
        </div>

        <div className="tarif-grid">
          {forfaits.map((forfait, index) => (
            <TarifCard
              key={forfait.id}
              title={forfait.title}
              note={forfait.note}
              lines={forfait.lines}
              footnote={forfait.footnote}
              index={index}
            />
          ))}
        </div>

        {/* Deux prestations sont annoncées « sur devis » : il faut un chemin
            pour le demander, sans quoi la mention reste sans issue. */}
        <div className="section-actions tarif-actions">
          <Link href="/contact" className="btn btn--primary">
            Demander un devis
          </Link>
        </div>
      </div>
    </RevealSection>
  );
}
