export const site = {
  name: 'La Clef Deschamps',
  tagline: 'Conciergerie à Châtelaillon-Plage',
  description:
    'Conciergerie à Châtelaillon-Plage spécialisée en location courte ' +
    'durée : optimisation des revenus, annonces, réservations, ' +
    'communication et accueil des voyageurs, ménage professionnel, ' +
    'blanchisserie.',
  url: 'https://laclef-deschamps.fr',
  contact: {
    phone: '+33 6 60 79 29 23',
    /* `tel:` n'accepte ni espace ni séparateur : le lien est stocké à part. */
    phoneHref: 'tel:+33660792923',
    email: 'contact@laclef-deschamps.fr',
    city: 'Châtelaillon-Plage',
    postalCode: '17340',
    /* Centre-ville. TODO: recentrer sur l'adresse exacte une fois connue. */
    latitude: 46.0725,
    longitude: -1.0889,
  },
  /** Crédit du studio : affiché en pied de page et déclaré en métadonnées. */
  author: {
    name: 'val4oss-studio',
    url: 'https://studio.val4oss.com',
  },
  locale: 'fr_FR',
  themeColor: '#281E73',
  backgroundColor: '#FDF8EC',
} as const;
