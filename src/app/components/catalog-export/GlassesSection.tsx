'use client';

import React from 'react';
import TypesLayout from '@/app/components/catalog-export/type-layout/TypesLayout';
import { objectFit } from '@/app/lib/consts/common';

function GlassesSection({ content, route }: { content: any; route?: string }) {
  const glassTypes = content.raw('glassesSection.types');
  const filteredTypes =
    route === 'inchideriTerase' ? glassTypes.slice(0, 3) : glassTypes;
  return (
    <TypesLayout
      data={filteredTypes}
      title={content('glassesSection.title')}
      imgStyles={objectFit.cover}
    />
  );
}

export default GlassesSection;
