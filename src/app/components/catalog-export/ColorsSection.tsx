"use client";

import React from "react";
import TypesLayout from "@/app/components/catalog-export/type-layout/TypesLayout";

function ColorsSection({ content }) {
  return (
    <TypesLayout
      data={content.raw("colorsSection.types")}
      title={content("colorsSection.title")}
    />
  );
}

export default ColorsSection;
