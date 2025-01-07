"use client";

import React from "react";
import TypeLayout from "@/app/components/catalog-item/type-layout/TypesSection";

function GlassesSection() {
  const titleObj = { title: "Tipuri de sticlă", width: 528, smallWidth: 283 };
  const glassTypes = [
    {
      id: 1,
      imageSrc: "/assets/images/office.png",
      name: "Obscure",
    },
    {
      id: 2,
      imageSrc: "/assets/images/office.png",
      name: "Rain",
    },
    {
      id: 3,
      imageSrc: "/assets/images/office.png",
      name: "Glue Chip",
    },
    {
      id: 4,
      imageSrc: "/assets/images/office.png",
      name: "Narrow Reed",
    },
    {
      id: 5,
      imageSrc: "/assets/images/office.png",
      name: "Reed",
    },
  ];
  return <TypeLayout data={glassTypes} titleObj={titleObj} />;
}

export default GlassesSection;
