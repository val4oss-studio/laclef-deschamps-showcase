/**
 * Avis clients affichés en bandeau sur la page d'accueil.
 *
 * NOTE: données statiques provisoires. La forme reprend volontairement celle
 * d'un avis de plateforme (note sur 5, pseudonyme, avatar, commentaire) pour
 * qu'un branchement futur sur Google Business Profile n'impacte que la source.
 */
export interface Avis {
  /** Identifiant stable — remplacé plus tard par celui de la plateforme. */
  id: string;
  pseudo: string;
  avatar: string;
  avatarAlt: string;
  /** Note de 0 à 5, demi-points compris (4.5 → 4 étoiles pleines + une moitié). */
  rating: number;
  comment: string;
}

/** Avatar neutre servi tant que les vraies photos ne sont pas disponibles. */
const AVATAR_PLACEHOLDER = '/avatar-placeholder.svg';

export const avis: readonly Avis[] = [
  {
    id: 'avis-1',
    pseudo: 'Camille R.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Photo de profil de Camille R.',
    rating: 5,
    comment:
      'Une équipe adorable et vraiment disponible. Notre appartement est ' +
      'impeccable entre chaque séjour, et les voyageurs nous le disent.',
  },
  {
    id: 'avis-2',
    pseudo: 'Julien M.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Photo de profil de Julien M.',
    rating: 4.5,
    comment:
      'Nous confions notre logement à La Clef des Champs depuis deux saisons. ' +
      'Les tarifs sont ajustés au fil de l’année, le taux de remplissage a suivi.',
  },
  {
    id: 'avis-3',
    pseudo: 'Sophie & Marc',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Photo de profil de Sophie et Marc',
    rating: 5,
    comment:
      'Accueil chaleureux à notre arrivée, malgré un train en retard. ' +
      'On a retrouvé la maison prête, avec un mot et quelques conseils du coin.',
  },
  {
    id: 'avis-4',
    pseudo: 'Nathalie B.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Photo de profil de Nathalie B.',
    rating: 4,
    comment:
      'Ménage et blanchisserie très soignés. Le linge revient nickel, ' +
      'et je n’ai plus à courir après les prestataires entre deux locations.',
  },
  {
    id: 'avis-5',
    pseudo: 'Pierre-Yves L.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Photo de profil de Pierre-Yves L.',
    rating: 4.5,
    comment:
      'Conciergerie familiale, on sent la différence : on parle à des gens ' +
      'qui connaissent Châtelaillon et qui répondent vraiment au téléphone.',
  },
  {
    id: 'avis-6',
    pseudo: 'Hélène D.',
    avatar: AVATAR_PLACEHOLDER,
    avatarAlt: 'Photo de profil de Hélène D.',
    rating: 5,
    comment:
      'Gestion complète de l’annonce, des réservations et des arrivées. ' +
      'Je n’ai plus rien à gérer à distance, c’est exactement ce que je cherchais.',
  },
] as const;
