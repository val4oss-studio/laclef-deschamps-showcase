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
  },
  locale: 'fr_FR',
  themeColor: '#281E73',
  backgroundColor: '#FDF8EC',
} as const;
