"use client";

import React from "react";
import TypesLayout from "@/app/components/catalog-export/type-layout/TypesLayout";

function GlassesSection({ content }) {
  return (
    <TypesLayout
      data={content.raw("glassesSection.types")}
      title={content("glassesSection.title")}
    />
  );
}

export default GlassesSection;
