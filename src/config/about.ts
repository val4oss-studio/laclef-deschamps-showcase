/**
 * Les quatre engagements présentés sur la page d'accueil.
 * Texte et visuels repris du site actuel (section « à propos »).
 */
export interface About {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const about: readonly About[] = [
  {
    title: 'Accueil voyageurs personnalisé',
    description:
      'Nous communiquons et accueillons vos voyageurs avec soin et ' +
      'attention, répondant à leurs questions et demandes tout au long de ' +
      'leur séjour.',
    image: '/about/accueil-personnalise.webp',
    imageAlt: 'Paillasson « Bienvenue » devant une porte en pierre',
  },
  {
    title: 'Services sur-mesure',
    description: 'Des solutions adaptées à vos besoins.',
    image: '/about/sur-mesure.webp',
    imageAlt: 'Vitrine d’une cabane bleue garnie de coquillages',
  },
  {
    title: 'Sécurité et entretien',
    description: 'Nous sommes sur place toute l’année pour une tranquillité d’esprit.',
    image: '/about/securite-entretien.webp',
    imageAlt: 'Coquillages déposés par la marée sur la plage de Châtelaillon',
  },
  {
    title: 'Connaissance locale',
    description: 'Une équipe locale et résidant à Châtelaillon-Plage.',
    image: '/about/connaissance-locale.webp',
    imageAlt: 'Carnet illustré d’un palmier posé sur un sous-main',
  },
] as const;
