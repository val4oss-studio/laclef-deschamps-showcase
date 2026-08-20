import { MetadataRoute } from 'next';
import { legalLinks, navLinks } from '@/config/navigation';
import { site } from '@/config/site';

const LAST_MODIFIED = new Date('2026-08-19');

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    ...navLinks.map((link) => ({
      url: `${site.url}${link.href}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...legalLinks.map((link) => ({
      url: `${site.url}${link.href}`,
      lastModified: LAST_MODIFIED,
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
  ];
}
