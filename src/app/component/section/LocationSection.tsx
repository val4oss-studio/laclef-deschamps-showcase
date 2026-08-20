import type { JSX } from 'react';

import { LocationMap } from '@/app/component/ui';
import { RevealSection } from '@/app/component/layout';
import { site } from '@/config/site';

interface LocationSectionProps {
  id: string;
}

export function LocationSection({ id }: LocationSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--sable">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Où nous trouver</p>
          <h2 className="section-title">{site.contact.city}</h2>
          <p className="section-lead">
            Nous intervenons sur {site.contact.city} ({site.contact.postalCode})
            et Angoulins. Nous n’avons pas de bureau ouvert au public : nous
            venons à vous, chez vous.
          </p>
        </div>

        <div className="ao-animate location-frame">
          <LocationMap
            latitude={site.contact.latitude}
            longitude={site.contact.longitude}
            title={`Carte de situation de ${site.contact.city}`}
          />
        </div>
      </div>
    </RevealSection>
  );
}
