/**
 * Liens de la navigation principale, dans l'ordre d'affichage.
 * Source unique partagée par la barre de navigation et le plan du site.
 */
export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: readonly NavLink[] = [
  { label: 'Services', href: '/services' },
  { label: 'Équipe', href: '/equipe' },
  { label: 'Tarifs', href: '/tarifs' },
  { label: 'Contact', href: '/contact' },
] as const;
