"use client";

import React from "react";
import TypeLayout from "@/app/components/catalog-item/type-layout/TypesSection";

function HandlesSection({ content }) {
  return (
    <TypeLayout
      data={content.raw("handlesSection.types")}
      title={content("handlesSection.title")}
    />
  );
}

export default HandlesSection;
