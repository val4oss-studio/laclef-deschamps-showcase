import type { CSSProperties, JSX } from 'react';

/*
 * Horizon — transition entre une section claire et une section « mer ».
 *
 * Reprend la signature du logo : un demi-soleil posé sur la ligne d'eau, et
 * son reflet en traits horizontaux dispersés dessous. Décor pur, masqué aux
 * technologies d'assistance.
 */

interface Glint {
  /** Largeur, en pourcentage du diamètre du soleil. Peut dépasser 100. */
  width: number;
  /** Épaisseur du trait, en pixels. */
  height: number;
  /** Distance sous la ligne d'eau, en pixels. */
  offset: number;
  /** Le reflet se disperse avec la profondeur. */
  opacity: number;
}

/*
 * Largeurs et espacements volontairement irréguliers : un reflet régulier
 * lirait comme un empilement de barres. L'enveloppe se resserre malgré tout
 * vers le bas, et deux traits débordent la largeur du soleil, comme sur le
 * badge. `offset` sert deux fois — au placement, et au décalage du dégradé.
 */
const GLINTS: readonly Glint[] = [
  { width: 100, height: 5, offset: 3, opacity: 1 },
  { width: 68, height: 3, offset: 12, opacity: 0.92 },
  { width: 112, height: 4, offset: 19, opacity: 0.85 },
  { width: 50, height: 3, offset: 27, opacity: 0.78 },
  { width: 74, height: 3, offset: 34, opacity: 0.7 },
  { width: 26, height: 2, offset: 41, opacity: 0.6 },
  { width: 40, height: 2, offset: 47, opacity: 0.5 },
  { width: 16, height: 2, offset: 53, opacity: 0.4 },
];

export function Horizon(): JSX.Element {
  return (
    <div className="horizon" aria-hidden="true">
      {GLINTS.map((glint) => (
        <span
          key={glint.offset}
          className="horizon-glint"
          style={
            {
              '--glint-width': glint.width,
              '--glint-height': glint.height,
              '--glint-offset': glint.offset,
              '--glint-opacity': glint.opacity,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
