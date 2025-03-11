'use client';

import React from 'react';
import Head from 'next/head';

function MetaHead({ structuredData }: { structuredData: object }) {
  return (
    <Head>
      <meta
        name="google-site-verification"
        content="0OsCdd_J0HLeN007NIOlwLs7nst7c-uQSlfAXqi1VA8"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <link
        rel="preload"
        as="image"
        href="/assets/images/hero-section.webp"
        type="image/webp"
        fetchPriority="high"
      />
      {/* ✅ Preload Google Fonts for Better LCP */}
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
    </Head>
  );
}

export default MetaHead;
