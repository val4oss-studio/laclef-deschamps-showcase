import type { CSSProperties, JSX } from 'react';

import type { Zone } from '@/config/zone';

interface ZoneMapProps {
  zones: readonly Zone[];
}

/* Repère du dessin. Les coordonnées de `Zone` sont en pourcentage de ces
   dimensions, ce qui évite au fichier de configuration de connaître le SVG. */
const VIEWBOX_WIDTH = 400;
const VIEWBOX_HEIGHT = 300;

/* Trait de côte stylisé : la mer à l'ouest, la terre à l'est, orienté
   nord-sud comme le littoral entre La Rochelle et Châtelaillon. */
const COASTLINE =
  'M80 0 C92 42 120 62 136 102 C152 142 166 164 184 202 C202 240 216 268 224 300';

/** Même tracé refermé sur les bords est et nord pour peindre les terres. */
const LANDMASS = `${COASTLINE} L${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT} L${VIEWBOX_WIDTH} 0 Z`;

export function ZoneMap({ zones }: ZoneMapProps): JSX.Element {
  const covered = zones.filter((zone) => zone.covered).map((zone) => zone.name);

  return (
    <svg
      className="zone-map"
      viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
      role="img"
      aria-label={`Carte du secteur d'intervention : ${covered.join(' et ')}`}
    >
      <rect className="zone-map-sea" width={VIEWBOX_WIDTH} height={VIEWBOX_HEIGHT} />
      <path className="zone-map-land" d={LANDMASS} />
      <ellipse className="zone-map-isle" cx="46" cy="236" rx="26" ry="11" />
      <path className="zone-map-coast" d={COASTLINE} />

      {zones.map((zone, index) => (
        <ZoneMarker key={zone.name} zone={zone} index={index} />
      ))}
    </svg>
  );
}

interface ZoneMarkerProps {
  zone: Zone;
  index: number;
}

function ZoneMarker({ zone, index }: ZoneMarkerProps): JSX.Element {
  const cx = (zone.x / 100) * VIEWBOX_WIDTH;
  const cy = (zone.y / 100) * VIEWBOX_HEIGHT;
  const style = { '--stagger-index': index } as CSSProperties;
  const className = zone.covered ? 'zone-marker' : 'zone-marker zone-marker--muted';

  return (
    <g className={className} style={style}>
      {zone.covered ? <circle className="zone-marker-halo" cx={cx} cy={cy} r="15" /> : null}
      <circle className="zone-marker-dot" cx={cx} cy={cy} r={zone.covered ? 6 : 4} />
      <text className="zone-marker-label" x={cx + 15} y={cy + 5}>
        {zone.name}
      </text>
    </g>
  );
}
