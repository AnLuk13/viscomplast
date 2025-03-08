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

      {/* ✅ Load Fonts Efficiently (with non-blocking print hack) */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Manrope:wght@200..800&display=swap"
        rel="stylesheet"
        media="print"
        onLoad={(e) => {
          e.currentTarget.media = "all";
        }}
      />
    </Head>
  );
}

export default MetaHead;
