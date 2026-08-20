/**
 * Membres de l'équipe présentés sur /equipe.
 *
 * NOTE: données provisoires. Les portraits ne sont pas encore fournis, tous
 * les membres pointent donc sur l'avatar générique partagé avec les avis.
 */
export interface Membre {
  id: string;
  /** NOM en capitales puis prénom, tel qu'affiché. */
  name: string;
  role: string;
  /** Une phrase, pas un paragraphe : la carte n'est pas une biographie. */
  sentence: string;
  avatar: string;
  avatarAlt: string;
}

/** Avatar neutre servi tant que les vrais portraits ne sont pas disponibles. */
const AVATAR_PLACEHOLDER = '/avatar-placeholder.svg';

export const equipe: readonly Membre[] = [
  {
    id: 'deschamps-marie',
    name: 'DESCHAMPS Marie',
    role: 'Fondatrice',
    sentence:
      'Née à Châtelaillon, elle connaît chaque rue du front de mer et ' +
      'chaque propriétaire par son prénom.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Portrait de Marie Deschamps',
  },
  {
    id: 'deschamps-thomas',
    name: 'DESCHAMPS Thomas',
    role: 'Gestion des annonces',
    sentence:
      'Il ajuste les tarifs au fil des saisons et suit les réservations ' +
      'sur toutes les plateformes.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Portrait de Thomas Deschamps',
  },
  {
    id: 'moreau-camille',
    name: 'MOREAU Camille',
    role: 'Accueil voyageurs',
    sentence:
      'Elle remet les clés, répond aux questions et reste joignable pendant tout le séjour.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Portrait de Camille Moreau',
  },
  {
    id: 'lambert-julien',
    name: 'LAMBERT Julien',
    role: 'Entretien et blanchisserie',
    sentence:
      'Il prépare chaque logement entre deux séjours et veille au linge, lavé sur place.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Portrait de Julien Lambert',
  },
  {
    id: 'val-lef',
    name: 'LEF Val',
    role: 'Web developer',
    sentence:
      'Confectionne la partie website.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Portrait de Valentin',
  },
] as const;
