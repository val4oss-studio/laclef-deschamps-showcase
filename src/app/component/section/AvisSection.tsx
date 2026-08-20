import type { JSX } from 'react';

import { AvisCard } from '@/app/component/ui';
import { RevealSection, ScrollRow } from '@/app/component/layout';
import { avis } from '@/config/avis';

interface AvisSectionProps {
  id: string;
}

export function AvisSection({ id }: AvisSectionProps): JSX.Element {
  return (
    <RevealSection id={id}>
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Les avis</p>
          <h2 className="section-title">Ce qu&apos;ils ont pensé de nous</h2>
        </div>

        <ScrollRow
          className="avis-banner ao-animate"
          label="Avis de nos clients"
          previousLabel="Voir les avis précédents"
          nextLabel="Voir les avis suivants"
        >
          {avis.map((item) => (
            <AvisCard
              key={item.id}
              pseudo={item.pseudo}
              avatar={item.avatar}
              avatarAlt={item.avatarAlt}
              rating={item.rating}
              comment={item.comment}
            />
          ))}
        </ScrollRow>
      </div>
    </RevealSection>
  );
}
