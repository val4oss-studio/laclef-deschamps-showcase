import type { JSX } from 'react';

interface LocationMapProps {
  latitude: number;
  longitude: number;
  /** Nom accessible du cadre, décrivant ce que la carte montre. */
  title: string;
}

/** Demi-côté de la fenêtre affichée, en degrés : cadre la commune entière. */
const BBOX_LON = 0.02;
const BBOX_LAT = 0.012;

/**
 * Carte de situation servie par OpenStreetMap.
 *
 * Choisi plutôt que Google Maps : pas de clé d'API, et surtout aucun cookie
 * publicitaire — l'intégration Google en dépose avant toute interaction et
 * imposerait un bandeau de consentement.
 *
 * L'iframe reste une requête vers un tiers : le chargement est différé, et le
 * traitement doit figurer dans la politique de confidentialité.
 */
export function LocationMap({ latitude, longitude, title }: LocationMapProps): JSX.Element {
  const bbox = [
    longitude - BBOX_LON,
    latitude - BBOX_LAT,
    longitude + BBOX_LON,
    latitude + BBOX_LAT,
  ].join(',');

  const embed =
    'https://www.openstreetmap.org/export/embed.html' +
    `?bbox=${bbox}&layer=mapnik&marker=${latitude},${longitude}`;

  const full = `https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=14`;

  return (
    <figure className="location-map">
      <div className="location-map-frame">
        <iframe src={embed} title={title} loading="lazy" referrerPolicy="no-referrer" />
      </div>
      <figcaption className="location-map-caption">
        <a href={full} className="location-map-link" target="_blank" rel="noopener noreferrer">
          Ouvrir la carte en grand ↗
        </a>
        <span>© les contributeurs OpenStreetMap</span>
      </figcaption>
    </figure>
  );
}
