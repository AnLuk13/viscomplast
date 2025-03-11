export function generateStructuredData(
  locale: string,
  languageMap: Record<string, string>,
) {
  const usefulLinks: Record<string, Record<string, string>> = {
    home: { ro: 'Acasă', ru: 'Главная', en: 'Home' },
    windowsPvc: { ro: 'Ferestre PVC', ru: 'Окна ПВХ', en: 'PVC Windows' },
    windowsAluminum: {
      ro: 'Ferestre Aluminiu',
      ru: 'Алюминиевые окна',
      en: 'Aluminum Windows',
    },
    doorsPvc: { ro: 'Uși PVC', ru: 'Двери ПВХ', en: 'PVC Doors' },
    doorsAluminum: {
      ro: 'Uși Aluminiu',
      ru: 'Алюминиевые двери',
      en: 'Aluminum Doors',
    },
    slidingPvc: {
      ro: 'Glisante PVC',
      ru: 'Раздвижные ПВХ',
      en: 'PVC Sliding Doors',
    },
    slidingAluminum: {
      ro: 'Glisante Aluminiu',
      ru: 'Раздвижные Алюминий',
      en: 'Aluminum Sliding',
    },
    vekaMotion: {
      ro: 'Glisante VEKA Motion',
      ru: 'VEKA Motion Раздвижные',
      en: 'VEKA Motion Sliding',
    },
    aluminumFacade: {
      ro: 'Fațade Aluminiu',
      ru: 'Алюминиевые фасады',
      en: 'Aluminum Facades',
    },
    exportItaly: {
      ro: 'Export Italia',
      ru: 'Экспорт Италия',
      en: 'Export Italy',
    },
    exportIreland: {
      ro: 'Export Irlanda',
      ru: 'Экспорт Ирландия',
      en: 'Export Ireland',
    },
    exportFranceBelgium: {
      ro: 'Export Franța Belgia',
      ru: 'Экспорт Франция Бельгия',
      en: 'Export France Belgium',
    },
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        name: 'Viscomplast',
        url: languageMap[locale],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: usefulLinks.home[locale],
            item: languageMap[locale],
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: usefulLinks.windowsPvc[locale],
            item: `${languageMap[locale]}/ferestre-pvc`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: usefulLinks.windowsAluminum[locale],
            item: `${languageMap[locale]}/ferestre-aluminiu`,
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: usefulLinks.doorsPvc[locale],
            item: `${languageMap[locale]}/usi-pvc`,
          },
          {
            '@type': 'ListItem',
            position: 5,
            name: usefulLinks.doorsAluminum[locale],
            item: `${languageMap[locale]}/usi-aluminiu`,
          },
          {
            '@type': 'ListItem',
            position: 6,
            name: usefulLinks.slidingPvc[locale],
            item: `${languageMap[locale]}/glisante-pvc`,
          },
          {
            '@type': 'ListItem',
            position: 7,
            name: usefulLinks.slidingAluminum[locale],
            item: `${languageMap[locale]}/glisante-aluminiu`,
          },
          {
            '@type': 'ListItem',
            position: 8,
            name: usefulLinks.vekaMotion[locale],
            item: `${languageMap[locale]}/glisante-veka-motion`,
          },
          {
            '@type': 'ListItem',
            position: 9,
            name: usefulLinks.aluminumFacade[locale],
            item: `${languageMap[locale]}/fatade-aluminiu`,
          },
          {
            '@type': 'ListItem',
            position: 10,
            name: usefulLinks.exportItaly[locale],
            item: `${languageMap[locale]}/export-italia`,
          },
          {
            '@type': 'ListItem',
            position: 11,
            name: usefulLinks.exportIreland[locale],
            item: `${languageMap[locale]}/export-irlanda`,
          },
          {
            '@type': 'ListItem',
            position: 12,
            name: usefulLinks.exportFranceBelgium[locale],
            item: `${languageMap[locale]}/export-franta-belgia`,
          },
        ],
      },
    ],
  };
}
