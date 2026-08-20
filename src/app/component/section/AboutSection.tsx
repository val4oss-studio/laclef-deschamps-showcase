import type { JSX } from 'react';
import { Card } from '@/app/component/ui';
import { about } from '@/config/about';
import { RevealSection } from '@/app/component/layout';

interface AboutSectionProps {
  id: string;
}

export function AboutSection({ id }: AboutSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--sea">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow eyebrow--inverse section-eyebrow">À propos</p>
          <h2 className="section-title">Une conciergerie locale et familiale</h2>
        </div>
        <div className="section-grid">
          {about.map((item, index) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
              image={item.image}
              imageAlt={item.imageAlt}
              index={index}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
