/**
 * Photographies de l'agence, affichées en galerie sur /equipe.
 *
 * NOTE: visuels provisoires, à remplacer par les photos des locaux.
 */
export interface Photo {
  id: string;
  src: string;
  alt: string;
}

export const galerie: readonly Photo[] = [
  {
    id: 'bureau',
    src: '/galerie/bureau.webp',
    alt: 'Bureau éclairé par une lampe, ordinateur portable ouvert',
  },
  {
    id: 'coin-cafe',
    src: '/galerie/coin-cafe.webp',
    alt: 'Coin café de l’agence, tasse tenue à deux mains près d’une plante',
  },
  {
    id: 'poste-de-travail',
    src: '/galerie/poste-de-travail.webp',
    alt: 'Poste de travail avec une plante verte et un carnet',
  },
  {
    id: 'atelier',
    src: '/galerie/atelier.webp',
    alt: 'Deux écrans allumés à côté d’une étagère de rangement',
  },
] as const;
