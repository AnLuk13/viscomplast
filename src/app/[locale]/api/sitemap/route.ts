import { NextResponse } from 'next/server';

const BASE_URL = 'https://viscomplast.md';

const languageMap: Record<string, string> = {
  ro: `${BASE_URL}/ro`,
  ru: `${BASE_URL}/ru`,
  en: `${BASE_URL}/en`,
};

const pages = [
  { path: '', priority: '1.0' },
  { path: '/ferestre-pvc', priority: '0.8' },
  { path: '/ferestre-aluminiu', priority: '0.8' },
  { path: '/usi-pvc', priority: '0.8' },
  { path: '/usi-aluminiu', priority: '0.8' },
  { path: '/glisante-pvc', priority: '0.7' },
  { path: '/glisante-aluminiu', priority: '0.7' },
  { path: '/glisante-veka-motion', priority: '0.7' },
  { path: '/fatade-aluminiu', priority: '0.7' },
  { path: '/export-italia', priority: '0.6' },
  { path: '/export-irlanda', priority: '0.6' },
  { path: '/export-franta-belgia', priority: '0.6' },
];

export async function GET(
  req: Request,
  { params }: { params: { locale: 'ro' | 'ru' | 'en' } },
) {
  const { locale } = await params;

  if (!languageMap[locale]) {
    return new NextResponse('Invalid locale', { status: 400 });
  }

  const baseUrl = languageMap[locale];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map(
        page => `
      <url>
        <loc>${baseUrl}${page.path}</loc>
        <changefreq>weekly</changefreq>
        <priority>${page.priority}</priority>
      </url>`,
      )
      .join('')}
  </urlset>`;

  return new NextResponse(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
