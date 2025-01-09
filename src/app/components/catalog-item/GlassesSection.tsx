"use client";

import React from "react";
import TypeLayout from "@/app/components/catalog-item/type-layout/TypesSection";

function GlassesSection({ content }) {
  return (
    <TypeLayout
      data={content.raw("glassesSection.types")}
      title={content("glassesSection.title")}
    />
  );
}

export default GlassesSection;
