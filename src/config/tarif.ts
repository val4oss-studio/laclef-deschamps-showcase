/**
 * Grille tarifaire affichée sur /tarifs.
 *
 * Les montants sont des chaînes et non des nombres : ils ne servent qu'à
 * l'affichage, et « sur devis » n'a pas de valeur numérique. Aucun calcul
 * ne doit s'appuyer dessus.
 */
export interface TarifLine {
  label: string;
  value: string;
}

export interface Forfait {
  id: string;
  title: string;
  /** Précision affichée sous le titre, entre parenthèses dans la plaquette. */
  note?: string;
  lines: readonly TarifLine[];
  /** Mention détachée en bas de carte, par-dessus un filet. */
  footnote?: string;
}

/**
 * L'offre principale, mise en avant : un pourcentage et non une grille.
 *
 * TODO: « Configuration, diffusion et ajustements de l'annonce » reconstitue
 * une ligne coupée dans la source (« … ajustements » / « annonce »). À faire
 * confirmer avant mise en ligne.
 */
export const forfaitPhare = {
  eyebrow: 'Forfait phare',
  title: 'Accompagnement complet',
  includes: [
    'Configuration, diffusion et ajustements de l’annonce',
    'Réservations',
    'Communication et accueil voyageurs',
  ],
  amount: '20 %',
  unit: 'des séjours bruts',
} as const;

export const forfaits: readonly Forfait[] = [
  {
    id: 'menage',
    title: 'Ménage',
    note: 'Frais de ménage et blanchisserie à la charge du voyageur.',
    lines: [
      { label: 'Studio', value: '50 €' },
      { label: 'T2', value: '60 €' },
      { label: 'T3', value: '70 €' },
      { label: 'T4', value: '80 €' },
      { label: 'T5', value: '90 €' },
    ],
    footnote: 'Extérieur sur devis, selon surface et équipements.',
  },
  {
    id: 'blanchisserie',
    title: 'Blanchisserie',
    lines: [
      { label: 'Pack linge de lit double', value: '12 €' },
      { label: 'Pack linge de lit simple', value: '6 €' },
      { label: 'Pack torchons / tapis de bain', value: '2 €' },
      { label: 'Pack serviettes (drap de bain + serviette)', value: '4 €' },
    ],
    footnote: 'Nettoyage canapé et tapis sur devis.',
  },
] as const;
