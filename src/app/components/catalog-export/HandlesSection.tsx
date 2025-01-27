"use client";

import React from "react";
import TypesLayout from "@/app/components/catalog-export/type-layout/TypesLayout";

function HandlesSection({ content }) {
  return (
    <TypesLayout
      data={content.raw("handlesSection.types")}
      title={content("handlesSection.title")}
    />
  );
}

export default HandlesSection;
