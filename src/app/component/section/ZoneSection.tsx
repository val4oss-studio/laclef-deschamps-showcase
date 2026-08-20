import type { JSX } from 'react';

import { LogementCard, ZoneMap } from '@/app/component/ui';
import { RevealSection, ScrollRow } from '@/app/component/layout';
import { logements } from '@/config/logement';
import { zones } from '@/config/zone';

interface ZoneSectionProps {
  id: string;
}

export function ZoneSection({ id }: ZoneSectionProps): JSX.Element {
  const covered = zones.filter((zone) => zone.covered);

  return (
    <RevealSection id={id} className="section section--sable">
      <div className="section-inner section-inner--split">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Notre secteur</p>
          <h2 className="section-title">Châtelaillon-Plage et Angoulins</h2>
          <p className="section-lead">
            Nous n’intervenons que là où nous habitons. Dix minutes séparent
            nos deux communes : nous passons quand il faut, sans jamais
            facturer un déplacement à rallonge.
          </p>
          <ul className="zone-list ao-animate">
            {covered.map((zone) => (
              <li key={zone.name} className="zone-item">
                <p className="zone-item-name">{zone.name}</p>
                <p className="zone-item-text">{zone.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="zone-map-frame ao-animate">
          <ZoneMap zones={zones} />
        </div>
      </div>

      <div className="section-inner">
        <h3 className="section-subtitle zone-logements-title">
          Les logements que nous gérons
        </h3>

        <ScrollRow
          className="zone-logements ao-animate"
          label="Logements que nous gérons"
          previousLabel="Voir les logements précédents"
          nextLabel="Voir les logements suivants"
        >
          {logements.map((logement, index) => (
            <LogementCard
              key={logement.id}
              name={logement.name}
              city={logement.city}
              type={logement.type}
              capacity={logement.capacity}
              description={logement.description}
              image={logement.image}
              imageAlt={logement.imageAlt}
              listing={logement.listing}
              index={index}
            />
          ))}
        </ScrollRow>
      </div>
    </RevealSection>
  );
}
