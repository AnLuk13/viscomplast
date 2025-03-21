import React from 'react';

function MetaHead() {
  return (
    <head>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-P52007PXSX"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P52007PXSX');
          `,
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
    </head>
  );
}

export default MetaHead;
