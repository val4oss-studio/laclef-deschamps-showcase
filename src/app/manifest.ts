import { MetadataRoute } from 'next';
import { site } from '@/config/site';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: 'laclef-deschamps',
    description: site.description,
    start_url: '/',
    display: 'standalone',
    background_color: site.backgroundColor,
    theme_color: site.themeColor,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      { src: '/brand/logo-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
