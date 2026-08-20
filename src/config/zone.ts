/**
 * Communes couvertes par la conciergerie, et repères de contexte.
 *
 * `x` et `y` positionnent le marqueur sur la carte stylisée, en pourcentage
 * du viewBox de `ZoneMap` — l'origine est le coin haut-gauche. Les valeurs
 * sont approximatives : la carte est une illustration, pas un relevé.
 */
export interface Zone {
  name: string;
  description: string;
  x: number;
  y: number;
  /** `false` pour un simple repère géographique, non desservi. */
  covered: boolean;
}

export const zones: readonly Zone[] = [
  {
    name: 'La Rochelle',
    description: 'Repère de situation, hors secteur d’intervention.',
    x: 30.5,
    y: 19,
    covered: false,
  },
  {
    name: 'Angoulins',
    description:
      'À dix minutes au nord, entre la pointe du Chay et les parcs à huîtres. ' +
      'Nous y suivons maisons et appartements à l’année.',
    x: 44,
    y: 49,
    covered: true,
  },
  {
    name: 'Châtelaillon-Plage',
    description:
      'Notre port d’attache. Du front de mer aux Boucholeurs, nous sommes ' +
      'sur place toute l’année, à quelques minutes de chaque logement.',
    x: 53,
    y: 77,
    covered: true,
  },
] as const;
