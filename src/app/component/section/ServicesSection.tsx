import type { JSX } from 'react';
import { Card } from '@/app/component/ui';
import { services } from '@/config/service';

interface ServicesSectionProps {
  id: string;
}

export function ServicesSection({ id }: ServicesSectionProps): JSX.Element {
  return (
    <section id={id} className="section section--sea">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow eyebrow--inverse section-eyebrow">Nos services</p>
          <h2 className="section-title">Une conciergerie locale et familiale</h2>
        </div>
        <div className="section-grid">
          {services.map((service) => (
            <Card
              key={service.title}
              title={service.title}
              description={service.description}
              image={service.image}
              imageAlt={service.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
