import type { JSX } from 'react';

import type { TarifLine } from '@/config/tarif';

interface PriceListProps {
  lines: readonly TarifLine[];
}

/**
 * Liste de prix à points de conduite, façon plaquette.
 * `<dl>` plutôt qu'un tableau : chaque prix définit son intitulé.
 */
export function PriceList({ lines }: PriceListProps): JSX.Element {
  return (
    <dl className="price-list">
      {lines.map((line) => (
        <div key={line.label} className="price-row">
          <dt className="price-label">{line.label}</dt>
          <dd className="price-value">{line.value}</dd>
        </div>
      ))}
    </dl>
  );
}
