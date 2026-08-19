# La Clef Deschamps — fichiers de marque

Générés depuis le PNG source 2160×2160, recadré au plus juste sur le badge
avec 2 % de marge de sécurité.

## Logo complet (fond transparent)
| Fichier | Usage |
|---|---|
| `logo-master.png` | Master 2157 px — archive, ne pas servir sur le web |
| `logo-1024.png` / `logo-1024.webp` | Source pour `next/image` |
| `logo-512.png` | Écran de démarrage, partages |
| `logo-256.png` | Header desktop |
| `logo-128.png` | Header mobile |
| `logo-64.png` | Limite basse de lisibilité du badge complet |
| `logo-32.png` | Illisible — fourni pour référence seulement |

## Marque simplifiée (tête de clef sur pastille indigo)
`mark-512.png`, `mark-180.png`, `mark-64.png`, `mark-32.png`

Recadrage automatique sur la tête de clef du badge. Ça dépanne, mais l'idéal
reste un redessin vectoriel du trèfle : les hachures du dessin d'origine
bavent en dessous de 48 px.

## Icônes et métadonnées
| Fichier | Destination |
|---|---|
| `favicon.ico` | `src/app/favicon.ico` (16/32/48/64) |
| `apple-touch-icon.png` | `public/` — 180 px, fond crème (iOS refuse la transparence) |
| `og-image.png` | 1200×630, logo sur fond indigo — Open Graph et Twitter |

## Intégration Next.js

```tsx
// src/app/layout.tsx
export const metadata: Metadata = {
  title: "La Clef Deschamps — Conciergerie à Châtelaillon-Plage",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};
```

```tsx
import Image from "next/image";
import logo from "@/assets/logo-1024.png";

<Image src={logo} alt="La Clef Deschamps" width={112} height={112} priority />
```

## Zone de protection
Réserver autour du badge une marge égale à 10 % de son diamètre. Le logo se
pose sur Sable-50 (`#FDF8EC`), sur blanc, ou sur Indigo (`#281E73`) — jamais
sur une photo sans pastille de fond, le cercle indigo du contour disparaît
sur les fonds sombres.
