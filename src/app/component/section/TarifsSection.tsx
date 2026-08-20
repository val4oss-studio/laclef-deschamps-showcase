import type { JSX } from 'react';

import { RevealSection } from '@/app/component/layout';
import { forfaitPhare } from '@/config/tarif';

interface TarifsSectionProps {
  id: string;
}

export function TarifsSection({ id }: TarifsSectionProps): JSX.Element {
  return (
    <RevealSection id={id} className="section section--first">
      <div className="section-inner">
        <div className="section-content">
          <p className="eyebrow section-eyebrow">Châtelaillon-Plage</p>
          <h1 className="section-title section-title--display">Nos tarifs</h1>
          <p className="section-lead">
            Une commission unique sur la gestion, et des prestations à la carte
            facturées à la prestation. Pas d’abonnement, pas de frais d’entrée.
          </p>
        </div>

        <div className="tarif-hero ao-animate">
          <div>
            <p className="eyebrow eyebrow--inverse">{forfaitPhare.eyebrow}</p>
            <h2 className="tarif-hero-title">{forfaitPhare.title}</h2>
            <ul className="tarif-includes">
              {forfaitPhare.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="tarif-hero-price">
            <span className="tarif-hero-amount">{forfaitPhare.amount}</span>
            <span className="tarif-hero-unit">{forfaitPhare.unit}</span>
          </p>
        </div>
      </div>
    </RevealSection>
  );
}
