/**
 * Contenu des pages légales.
 *
 * ⚠️ Rédigé comme une base de travail, pas comme un conseil juridique. Les
 * CGV forment un contrat et engagent l'entreprise : elles doivent être revues
 * par un juriste avant mise en ligne. Tous les éléments encore inconnus sont
 * balisés « [À COMPLÉTER : … ] » et mis en évidence par `LegalSection`.
 */
export interface LegalBlock {
  title: string;
  paragraphs?: readonly string[];
  list?: readonly string[];
}

export interface LegalDocument {
  title: string;
  /** Date de dernière révision, affichée en tête. */
  updatedAt: string;
  intro?: string;
  blocks: readonly LegalBlock[];
}

const UPDATED_AT = '20 août 2026';

const EDITEUR =
  '[À COMPLÉTER : raison sociale], [À COMPLÉTER : forme juridique] au ' +
  'capital de [À COMPLÉTER] €, immatriculée au RCS de La Rochelle sous le ' +
  'numéro [À COMPLÉTER : SIREN], dont le siège social est situé ' +
  '[À COMPLÉTER : adresse], 17340 Châtelaillon-Plage.';

export const mentionsLegales: LegalDocument = {
  title: 'Mentions légales',
  updatedAt: UPDATED_AT,
  intro:
    'Informations légales relatives au site laclef-deschamps.fr et à ' +
    'l’entreprise qui l’édite, conformément à l’article 6-III de la loi ' +
    'n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.',
  blocks: [
    {
      title: 'Éditeur du site',
      paragraphs: [
        `Le site laclef-deschamps.fr est édité par ${EDITEUR}`,
        'Numéro de TVA intracommunautaire : [À COMPLÉTER, ou mention ' +
          '« TVA non applicable, article 293 B du CGI » si l’entreprise ' +
          'bénéficie de la franchise en base].',
        'Téléphone : +33 6 60 79 29 23 — Courriel : contact@laclef-deschamps.fr',
      ],
    },
    {
      title: 'Directeur de la publication',
      paragraphs: [
        '[À COMPLÉTER : prénom, nom], en qualité de [À COMPLÉTER : gérant, ' +
          'président, entrepreneur individuel].',
      ],
    },
    {
      title: 'Activité de gestion immobilière',
      paragraphs: [
        'L’activité de conciergerie exercée pour le compte de propriétaires ' +
          'peut relever de la loi n° 70-9 du 2 janvier 1970, dite loi Hoguet, ' +
          'dès lors que l’entreprise agit en qualité de mandataire pour la ' +
          'gestion locative d’un bien ou l’encaissement de fonds pour le ' +
          'compte d’autrui.',
        'Le cas échéant, les mentions suivantes sont obligatoires :',
      ],
      list: [
        'Carte professionnelle « Gestion immobilière » n° [À COMPLÉTER], ' +
          'délivrée par la CCI de [À COMPLÉTER].',
        'Garantie financière souscrite auprès de [À COMPLÉTER : organisme], ' +
          'à hauteur de [À COMPLÉTER] €.',
        'Assurance de responsabilité civile professionnelle souscrite auprès ' +
          'de [À COMPLÉTER : assureur], police n° [À COMPLÉTER], couvrant ' +
          'l’ensemble du territoire français.',
      ],
    },
    {
      title: 'Hébergement',
      paragraphs: [
        'Le site est hébergé par [À COMPLÉTER : nom de l’hébergeur], ' +
          '[À COMPLÉTER : adresse postale complète], téléphone ' +
          '[À COMPLÉTER].',
      ],
    },
    {
      title: 'Propriété intellectuelle',
      paragraphs: [
        'L’ensemble du site — structure, textes, mise en page, logo, ' +
          'illustrations et photographies — est protégé par le droit de la ' +
          'propriété intellectuelle. Toute reproduction, représentation ou ' +
          'adaptation, totale ou partielle, sans autorisation écrite ' +
          'préalable, est interdite.',
        'La marque et le logo « La Clef Deschamps » demeurent la propriété ' +
          'exclusive de l’éditeur.',
      ],
    },
    {
      title: 'Liens hypertextes',
      paragraphs: [
        'Le site peut renvoyer vers des sites tiers, notamment les ' +
          'plateformes de réservation sur lesquelles les logements sont ' +
          'diffusés. L’éditeur n’exerce aucun contrôle sur ces sites et ' +
          'décline toute responsabilité quant à leur contenu.',
      ],
    },
    {
      title: 'Données personnelles',
      paragraphs: [
        'Le traitement des données personnelles collectées via ce site est ' +
          'décrit dans la politique de confidentialité, accessible depuis le ' +
          'pied de page.',
      ],
    },
    {
      title: 'Crédits',
      paragraphs: [
        'Conception et développement : val4oss.',
        'Cartographie : © les contributeurs OpenStreetMap.',
        'Photographies : [À COMPLÉTER : crédits ou mention « photographies ' +
          'de l’éditeur »].',
      ],
    },
  ],
};

export const cgv: LegalDocument = {
  title: 'Conditions générales de vente',
  updatedAt: UPDATED_AT,
  intro:
    'Les présentes conditions régissent les prestations de conciergerie ' +
    'fournies par La Clef Deschamps aux propriétaires de biens mis en ' +
    'location de courte durée.',
  blocks: [
    {
      title: '1. Objet et champ d’application',
      paragraphs: [
        'Les présentes conditions générales de vente définissent les droits ' +
          'et obligations des parties dans le cadre des prestations de ' +
          'conciergerie proposées par l’entreprise, ci-après « le ' +
          'Prestataire », au propriétaire d’un bien, ci-après « le Client ».',
        'Toute commande de prestation implique l’acceptation sans réserve ' +
          'des présentes conditions. Elles prévalent sur tout autre document ' +
          'du Client, sauf dérogation écrite expresse.',
      ],
    },
    {
      title: '2. Prestations',
      paragraphs: [
        'Le Prestataire propose les prestations suivantes, souscrites ' +
          'séparément ou conjointement :',
      ],
      list: [
        'Forfait accompagnement complet : configuration, diffusion et ' +
          'ajustement de l’annonce, gestion des réservations, communication ' +
          'et accueil des voyageurs.',
        'Ménage : remise en état du logement entre deux séjours, tarifée ' +
          'selon la typologie du bien.',
        'Blanchisserie : fourniture et entretien du linge, tarifés au pack.',
        'Toute prestation ponctuelle convenue par écrit et faisant l’objet ' +
          'd’un devis préalable.',
      ],
    },
    {
      title: '3. Formation du contrat',
      paragraphs: [
        'La relation contractuelle est formée par la signature d’un mandat ' +
          'ou d’un devis accepté par le Client. Ce document précise les ' +
          'prestations retenues, le bien concerné, la durée d’engagement et ' +
          'les tarifs applicables.',
        'Lorsque la prestation comporte la gestion locative du bien pour le ' +
          'compte du Client, un mandat écrit conforme aux dispositions de la ' +
          'loi n° 70-9 du 2 janvier 1970 est obligatoirement établi.',
      ],
    },
    {
      title: '4. Obligations du Prestataire',
      paragraphs: [
        'Le Prestataire s’engage à exécuter les prestations avec soin et ' +
          'diligence, dans le respect des règles de l’art. Il est tenu d’une ' +
          'obligation de moyens et non de résultat, notamment quant au taux ' +
          'd’occupation du bien ou au montant des revenus locatifs.',
        'Le Prestataire rend compte de son activité au Client selon la ' +
          'périodicité définie au mandat.',
      ],
    },
    {
      title: '5. Obligations du Client',
      paragraphs: ['Le Client s’engage à :'],
      list: [
        'Fournir un logement conforme à la réglementation applicable à la ' +
          'location de courte durée, notamment en matière de sécurité, de ' +
          'décence et, le cas échéant, de déclaration ou d’autorisation de ' +
          'changement d’usage auprès de la commune.',
        'Souscrire et maintenir une assurance couvrant la mise en location ' +
          'du bien, et en justifier sur demande.',
        'Remettre au Prestataire les moyens d’accès nécessaires à ' +
          'l’exécution des prestations.',
        'Informer sans délai le Prestataire de toute indisponibilité du ' +
          'bien ou de toute réservation conclue directement.',
        'S’acquitter des sommes dues dans les conditions prévues à ' +
          'l’article 7.',
      ],
    },
    {
      title: '6. Tarifs',
      paragraphs: [
        'Les tarifs en vigueur sont ceux publiés sur le site à la date de la ' +
          'commande, ou ceux figurant au devis accepté. Le forfait ' +
          'accompagnement complet est facturé 20 % du montant brut des ' +
          'séjours encaissés.',
        'Les prestations de ménage et de blanchisserie sont facturées selon ' +
          'la grille tarifaire en vigueur. Sauf stipulation contraire, les ' +
          'frais de ménage et de blanchisserie sont à la charge du voyageur.',
        'Les tarifs peuvent être révisés annuellement. Toute révision est ' +
          'notifiée au Client par écrit avec un préavis de [À COMPLÉTER : ' +
          'nombre] jours.',
      ],
    },
    {
      title: '7. Facturation et paiement',
      paragraphs: [
        'Les prestations font l’objet d’une facturation mensuelle, ' +
          'accompagnée du relevé des séjours de la période. Le règlement ' +
          'intervient à [À COMPLÉTER : délai, 30 jours maximum entre ' +
          'professionnels] à compter de la date de facture.',
        'Tout retard de paiement entraîne de plein droit l’application de ' +
          'pénalités au taux d’intérêt légal majoré, ainsi qu’une indemnité ' +
          'forfaitaire pour frais de recouvrement de 40 €, conformément aux ' +
          'articles L. 441-10 et D. 441-5 du code de commerce.',
      ],
    },
    {
      title: '8. Durée, reconduction et résiliation',
      paragraphs: [
        'Le contrat est conclu pour la durée figurant au mandat. Sauf ' +
          'dénonciation par l’une des parties, il se reconduit tacitement ' +
          'par périodes de [À COMPLÉTER : durée].',
        'Chaque partie peut résilier moyennant un préavis écrit de ' +
          '[À COMPLÉTER : durée]. Les séjours déjà confirmés à la date de ' +
          'résiliation sont menés à leur terme et facturés normalement.',
        'En cas de manquement grave d’une partie à ses obligations, non ' +
          'réparé dans les quinze jours suivant une mise en demeure restée ' +
          'sans effet, l’autre partie peut résilier de plein droit.',
      ],
    },
    {
      title: '9. Responsabilité',
      paragraphs: [
        'La responsabilité du Prestataire ne peut être engagée qu’en cas de ' +
          'faute prouvée dans l’exécution des prestations, et se limite aux ' +
          'dommages directs. Elle est plafonnée au montant des sommes ' +
          'facturées au titre des douze derniers mois.',
        'Le Prestataire ne saurait être tenu responsable des dommages causés ' +
          'au bien par les voyageurs, ni des annulations, litiges ou ' +
          'défaillances imputables aux plateformes de réservation.',
      ],
    },
    {
      title: '10. Force majeure',
      paragraphs: [
        'Aucune partie ne peut être tenue responsable d’un manquement dû à ' +
          'un cas de force majeure au sens de l’article 1218 du code civil. ' +
          'Si l’empêchement se prolonge au-delà de trente jours, chaque ' +
          'partie peut mettre fin au contrat sans indemnité.',
      ],
    },
    {
      title: '11. Droit de rétractation',
      paragraphs: [
        'Lorsque le Client a la qualité de consommateur ou de non-professionnel ' +
          'au sens du code de la consommation et que le contrat a été conclu ' +
          'à distance ou hors établissement, il dispose d’un délai de ' +
          'quatorze jours pour se rétracter, sans avoir à motiver sa ' +
          'décision.',
        'Le Client peut demander l’exécution des prestations avant la fin de ' +
          'ce délai ; il reste alors redevable des prestations déjà réalisées.',
      ],
    },
    {
      title: '12. Données personnelles',
      paragraphs: [
        'Les données traitées dans le cadre de la relation contractuelle ' +
          'font l’objet de la politique de confidentialité accessible depuis ' +
          'le pied de page du site.',
      ],
    },
    {
      title: '13. Médiation et règlement des litiges',
      paragraphs: [
        'Conformément à l’article L. 612-1 du code de la consommation, le ' +
          'Client consommateur peut recourir gratuitement au médiateur de la ' +
          'consommation dont relève le Prestataire : [À COMPLÉTER : nom du ' +
          'médiateur, adresse postale et site internet].',
        'La plateforme européenne de règlement en ligne des litiges est ' +
          'accessible à l’adresse ec.europa.eu/consumers/odr.',
        'À défaut de résolution amiable, le litige est porté devant les ' +
          'juridictions compétentes.',
      ],
    },
    {
      title: '14. Droit applicable',
      paragraphs: [
        'Les présentes conditions sont soumises au droit français. Elles ' +
          'sont rédigées en langue française, seule version faisant foi.',
      ],
    },
  ],
};

export const confidentialite: LegalDocument = {
  title: 'Politique de confidentialité',
  updatedAt: UPDATED_AT,
  intro:
    'Cette politique décrit les données personnelles collectées par le site ' +
    'laclef-deschamps.fr, l’usage qui en est fait et les droits dont vous ' +
    'disposez, conformément au règlement (UE) 2016/679 et à la loi ' +
    'Informatique et Libertés.',
  blocks: [
    {
      title: 'Responsable du traitement',
      paragraphs: [
        `Le responsable du traitement est ${EDITEUR}`,
        'Pour toute question relative à vos données : ' +
          'contact@laclef-deschamps.fr',
      ],
    },
    {
      title: 'Données collectées',
      paragraphs: [
        'Le site ne collecte aucune donnée à votre insu. Les seules données ' +
          'traitées sont celles que vous transmettez volontairement :',
      ],
      list: [
        'Formulaire de contact : nom, adresse électronique et contenu du ' +
          'message. [À COMPLÉTER : supprimer cette ligne tant que le ' +
          'formulaire n’est pas en ligne.]',
        'Échanges directs : les coordonnées communiquées par téléphone ou ' +
          'par courriel.',
        'Données techniques : adresse IP et informations de connexion ' +
          'enregistrées dans les journaux du serveur, à des fins de sécurité.',
      ],
    },
    {
      title: 'Finalités et bases légales',
      list: [
        'Répondre à vos demandes d’information — base légale : votre ' +
          'consentement, ou l’exécution de mesures précontractuelles.',
        'Gérer la relation contractuelle avec les propriétaires — base ' +
          'légale : l’exécution du contrat.',
        'Respecter nos obligations comptables et fiscales — base légale : ' +
          'une obligation légale.',
        'Assurer la sécurité et le bon fonctionnement du site — base ' +
          'légale : notre intérêt légitime.',
      ],
    },
    {
      title: 'Cookies et traceurs',
      paragraphs: [
        'Ce site ne dépose aucun cookie publicitaire, aucun cookie de ' +
          'mesure d’audience et aucun traceur tiers. Aucun bandeau de ' +
          'consentement n’est donc nécessaire.',
        'Les polices de caractères sont hébergées sur nos propres serveurs : ' +
          'leur affichage n’entraîne aucune requête vers un service tiers.',
      ],
    },
    {
      title: 'Services tiers',
      paragraphs: [
        'La carte de situation présentée sur la page Contact est fournie par ' +
          'OpenStreetMap. Son affichage entraîne une connexion aux serveurs ' +
          'de la Fondation OpenStreetMap, qui peut enregistrer votre adresse ' +
          'IP. Ce chargement est différé : il n’a lieu que lorsque la carte ' +
          'entre dans votre champ de vision.',
        'Le site est hébergé par [À COMPLÉTER : nom de l’hébergeur], qui ' +
          'agit en qualité de sous-traitant au sens de l’article 28 du RGPD.',
      ],
    },
    {
      title: 'Destinataires',
      paragraphs: [
        'Vos données ne sont ni vendues, ni louées, ni cédées à des tiers à ' +
          'des fins commerciales. Elles sont accessibles aux seules personnes ' +
          'habilitées de l’entreprise et, le cas échéant, à nos ' +
          'sous-traitants techniques agissant sur instruction.',
      ],
    },
    {
      title: 'Durées de conservation',
      list: [
        'Demandes de contact restées sans suite : trois ans à compter du ' +
          'dernier échange.',
        'Documents contractuels et comptables : dix ans, conformément aux ' +
          'obligations légales.',
        'Journaux de connexion du serveur : douze mois.',
      ],
    },
    {
      title: 'Transferts hors Union européenne',
      paragraphs: [
        'Les données sont hébergées au sein de l’Union européenne. Aucun ' +
          'transfert vers un pays tiers n’est effectué. [À COMPLÉTER : ' +
          'adapter si l’hébergeur retenu est établi hors UE.]',
      ],
    },
    {
      title: 'Vos droits',
      paragraphs: [
        'Vous disposez d’un droit d’accès, de rectification, d’effacement, ' +
          'de limitation, d’opposition et de portabilité de vos données, ' +
          'ainsi que du droit de définir des directives relatives à leur sort ' +
          'après votre décès.',
        'Pour les exercer, écrivez à contact@laclef-deschamps.fr. Une ' +
          'réponse vous sera apportée dans un délai d’un mois.',
      ],
    },
    {
      title: 'Réclamation',
      paragraphs: [
        'Si vous estimez, après nous avoir contactés, que vos droits ne sont ' +
          'pas respectés, vous pouvez adresser une réclamation à la ' +
          'Commission nationale de l’informatique et des libertés — CNIL, ' +
          '3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07, ou en ligne ' +
          'sur cnil.fr.',
      ],
    },
    {
      title: 'Modifications',
      paragraphs: [
        'Cette politique peut être mise à jour pour tenir compte des ' +
          'évolutions du site ou de la réglementation. La date de dernière ' +
          'révision figure en tête de page.',
      ],
    },
  ],
};
