import type { CSSProperties, JSX } from 'react';

interface RatingStarsProps {
  /** Note de 0 à 5, demi-points compris (4.5 → 4 étoiles pleines + une moitié). */
  rating: number;
}

const STAR_COUNT = 5;

/** Étoile à cinq branches, tracée dans une boîte 24×24. */
const STAR_PATH =
  'M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279' +
  'L12 19.446l-7.416 3.967 1.48-8.279L0 9.306l8.332-1.151z';

/**
 * Note visuelle : deux rangées d'étoiles superposées, celle du dessus étant
 * rognée à la largeur exacte de la note. C'est ce qui permet les demi-étoiles
 * sans jamais dupliquer un tracé « moitié pleine ».
 */
export function RatingStars({ rating }: RatingStarsProps): JSX.Element {
  const bounded = Math.min(Math.max(rating, 0), STAR_COUNT);
  const style = { '--rating-fill': `${(bounded / STAR_COUNT) * 100}%` } as CSSProperties;

  return (
    <div
      className="rating"
      style={style}
      role="img"
      aria-label={`Note de ${bounded} sur ${STAR_COUNT}`}
    >
      <StarRow />
      <div className="rating-clip" aria-hidden="true">
        <StarRow />
      </div>
    </div>
  );
}

function StarRow(): JSX.Element {
  return (
    <div className="rating-row">
      {Array.from({ length: STAR_COUNT }, (_, index) => (
        <svg
          key={index}
          className="rating-star"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d={STAR_PATH} />
        </svg>
      ))}
    </div>
  );
}
