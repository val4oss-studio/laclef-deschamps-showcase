/**
 * Logements suivis par la conciergerie.
 *
 * NOTE: données provisoires. Les annonces ne sont pas encore publiées, donc
 * `listing` est absent partout : la carte affiche « Bientôt en ligne » au
 * lieu d'un lien mort. Il suffit d'ajouter le bloc pour activer le lien :
 *
 *   listing: { url: 'https://www.airbnb.fr/rooms/…', platform: 'Airbnb' },
 */
export interface Listing {
  url: string;
  platform: string;
}

export interface Logement {
  id: string;
  name: string;
  city: string;
  /** Typologie affichée telle quelle : « T2 », « Maison », « Studio »… */
  type: string;
  capacity: string;
  description: string;
  image: string;
  imageAlt: string;
  listing?: Listing;
}

export const logements: readonly Logement[] = [
  {
    id: 'cabanon-bleu',
    name: 'Le Cabanon bleu',
    city: 'Châtelaillon-Plage',
    type: 'T2',
    capacity: '4 voyageurs',
    description:
      'À deux pas du front de mer, un appartement clair rénové en 2024, ' +
      'avec balcon et place de stationnement privative.',
    image: '/logement/cabanon-bleu.webp',
    imageAlt: 'Salon lumineux avec canapé vert d’eau et table basse ronde',
  },
  {
    id: 'escale-boucholeurs',
    name: 'L’Escale des Boucholeurs',
    city: 'Châtelaillon-Plage',
    type: 'Maison',
    capacity: '6 voyageurs',
    description:
      'Une maison de famille au calme du hameau des Boucholeurs, avec cour ' +
      'abritée et vue dégagée sur les parcs à huîtres.',
    image: '/logement/escale-boucholeurs.webp',
    imageAlt: 'Séjour ouvert sur une baie vitrée donnant sur la plage',
  },
  {
    id: 'villa-des-dunes',
    name: 'La Villa des Dunes',
    city: 'Angoulins',
    type: 'T3',
    capacity: '5 voyageurs',
    description:
      'Entre plage et pinède, un logement de plain-pied avec terrasse ' +
      'exposée sud et accès direct au sentier côtier.',
    image: '/logement/villa-des-dunes.webp',
    imageAlt: 'Fenêtre entrouverte sur l’océan derrière un rideau',
  },
] as const;
