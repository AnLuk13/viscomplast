"use client";

import React from "react";
import TypeLayout from "@/app/components/catalog-item/type-layout/TypesSection";

function ColorsSection() {
  const titleObj = { title: "Culori", width: 324, smallWidth: 251 };
  const typeCardsData = [
    {
      id: 1,
      imageSrc: "/assets/images/office.png",
      name: "SAL-51",
      description: "golden oak",
    },
    {
      id: 2,
      imageSrc: "/assets/images/office.png",
      name: "SAL-70",
      description: "anthracite",
    },
    {
      id: 3,
      imageSrc: "/assets/images/office.png",
      name: "SAL-51",
      description: "golden oak",
    },
    {
      id: 4,
      imageSrc: "/assets/images/office.png",
      name: "SAL-18",
      description: "jet black mat",
    },
    {
      id: 5,
      imageSrc: "/assets/images/office.png",
      name: "SAL-51",
      description: "golden oak",
    },
  ];

  return <TypeLayout data={typeCardsData} titleObj={titleObj} />;
}

export default ColorsSection;
