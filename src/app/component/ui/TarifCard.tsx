import type { CSSProperties, JSX } from 'react';

import type { TarifLine } from '@/config/tarif';

import { PriceList } from './PriceList';

interface TarifCardProps {
  title: string;
  note?: string;
  lines: readonly TarifLine[];
  footnote?: string;
  /** Rang de la carte dans sa grille, pour échelonner l'apparition. */
  index?: number;
}

export function TarifCard({
  title,
  note,
  lines,
  footnote,
  index,
}: TarifCardProps): JSX.Element {
  const style =
    index === undefined ? undefined : ({ '--stagger-index': index } as CSSProperties);

  return (
    <article className="card" style={style}>
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        {note ? <p className="tarif-note">{note}</p> : null}
        <PriceList lines={lines} />
        {footnote ? <p className="tarif-footnote">{footnote}</p> : null}
      </div>
    </article>
  );
}
