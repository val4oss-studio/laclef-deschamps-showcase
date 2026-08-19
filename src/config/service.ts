/**
 * Prestations affichées sur la page d'accueil et sur /services.
 * Reprend le contenu de la page « Nos Services » du site actuel.
 */
export interface Service {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const services: readonly Service[] = [
  {
    title: 'Assistance et support',
    description:
      'Un accompagnement complet et sur mesure : configuration de ' +
      "l'annonce, ajustement des tarifs de vos nuitées selon la " +
      'saisonnalité et les évènements, réservations.',
    image: '/service/assistance.webp',
    imageAlt: 'Tasse de café posée près d’un ordinateur portable',
  },
  {
    title: 'Accueil voyageurs',
    description:
      'Nous assurons les entrées et sorties de vos voyageurs et répondons ' +
      'à leurs différentes questions avant et pendant leur séjour.',
    image: '/service/accueil-voyageurs.webp',
    imageAlt: 'Comptoir d’accueil coloré en bord de mer',
  },
  {
    title: 'Ménage',
    description:
      'Nous assurons un ménage minutieux entre chaque réservation et ' +
      'veillons à ce que votre logement soit parfaitement préparé pour les ' +
      'prochains voyageurs.',
    image: '/service/menage.webp',
    imageAlt: 'Personne tenant un balai dans une cuisine',
  },
  {
    title: 'Blanchisserie',
    description:
      'Nous assurons un lavage haute température pour une hygiène ' +
      'parfaite, avec le plus grand soin pour vos textiles.',
    image: '/service/blanchisserie.webp',
    imageAlt: 'Rangée de sèche-linge à hublot',
  },
] as const;
