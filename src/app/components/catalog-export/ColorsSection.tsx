"use client";

import React from "react";
import TypesLayout from "@/app/components/catalog-export/type-layout/TypesLayout";
import { objectFit } from "@/app/lib/consts/common";

function ColorsSection({ content }) {
  return (
    <TypesLayout
      data={content.raw("colorsSection.types")}
      title={content("colorsSection.title")}
      imgStyles={objectFit.cover}
    />
  );
}

export default ColorsSection;
