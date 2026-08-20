import type { JSX } from 'react';
import { Card } from '@/app/component/ui';
import { services } from '@/config/service';
import { RevealSection } from '@/app/component/layout';

interface ServicesSectionProps {
  id: string;
}

export function ServicesSection({ id }: ServicesSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--first">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Châtelaillon-Plage</p>
          <h1 className="section-title section-title--display">Nos services</h1>
        </div>
        <div className="section-grid">
          {services.map((service, index) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
              index={index}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
