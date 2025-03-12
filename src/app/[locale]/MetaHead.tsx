import React from 'react';

function MetaHead() {
  return (
    <head>
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
    </head>
  );
}

export default MetaHead;
