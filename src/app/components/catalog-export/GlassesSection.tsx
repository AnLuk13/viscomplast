"use client";

import React from "react";
import TypesLayout from "@/app/components/catalog-export/type-layout/TypesLayout";
import { objectFit } from "@/app/lib/consts/common";

function GlassesSection({ content }) {
  return (
    <TypesLayout
      data={content.raw("glassesSection.types")}
      title={content("glassesSection.title")}
      imgStyles={objectFit.cover}
    />
  );
}

export default GlassesSection;
