"use client";

import React from "react";
import TypeLayout from "@/app/components/catalog-item/type-layout/TypesSection";

function HandlesSection() {
  const titleObj = { title: "Tipuri de sticlă", width: 528, smallWidth: 283 };
  const glassTypes = [
    {
      id: 1,
      imageSrc: "/assets/images/office.png",
      name: "Metal",
    },
    {
      id: 2,
      imageSrc: "/assets/images/office.png",
      name: "Plastic",
    },
    {
      id: 3,
      imageSrc: "/assets/images/office.png",
      name: "Metal",
    },
    {
      id: 4,
      imageSrc: "/assets/images/office.png",
      name: "Plastic",
    },
    {
      id: 5,
      imageSrc: "/assets/images/office.png",
      name: "Metal",
    },
  ];
  return <TypeLayout data={glassTypes} titleObj={titleObj} />;
}

export default HandlesSection;
