import type { JSX } from 'react';

import { PersonCard } from '@/app/component/ui';
import { RevealSection } from '@/app/component/layout';
import { equipe } from '@/config/equipe';

interface TeamSectionProps {
  id: string;
}

export function TeamSection({ id }: TeamSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--first">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Châtelaillon-Plage</p>
          <h1 className="section-title section-title--display">Notre équipe</h1>
          <p className="section-lead">
            Une conciergerie familiale : nous sommes quatre, tous installés
            entre Châtelaillon et Angoulins, et c’est toujours l’un de nous que
            vous aurez au téléphone.
          </p>
        </div>

        <div className="team-grid">
          {equipe.map((membre, index) => (
            <PersonCard
              key={membre.id}
              name={membre.name}
              role={membre.role}
              sentence={membre.sentence}
              avatar={membre.avatar}
              avatarAlt={membre.avatarAlt}
              index={index}
            />
          ))}
        </div>
      </div>
    </RevealSection>
  );
}
