/**
 * Liens de la navigation principale, dans l'ordre d'affichage.
 * Source unique partagée par la barre de navigation et le plan du site.
 */
export interface NavLink {
  label: string;
  href: string;
}

/**
 * Retour à l'accueil, tenu à l'écart de `navLinks` : sur grand écran le logo
 * joue déjà ce rôle, et le plan du site liste la racine séparément — l'ajouter
 * à `navLinks` y créerait une URL en double.
 */
export const homeLink: NavLink = { label: 'Accueil', href: '/' };

export const navLinks: readonly NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Contact', href: '/contact' },
] as const;

/**
 * Documents obligatoires, regroupés en bas de page.
 * TODO: les gabarits sont vides — le contenu juridique reste à rédiger.
 */
export const legalLinks: readonly NavLink[] = [
  { label: 'Mentions légales', href: '/mentions-legales' },
  { label: 'CGV', href: '/cgv' },
  { label: 'Politique de confidentialité', href: '/politique-de-confidentialite' },
] as const;
