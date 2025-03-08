import React from "react";
import Head from "next/head";

function MetaHead() {
  return (
    <Head>
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
