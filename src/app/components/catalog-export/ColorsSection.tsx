"use client";

import React from "react";
import TypeLayout from "@/app/components/catalog-export/type-layout/TypesSection";

function ColorsSection({ content }) {
  return (
    <TypeLayout
      data={content.raw("colorsSection.types")}
      title={content("colorsSection.title")}
    />
  );
}

export default ColorsSection;
