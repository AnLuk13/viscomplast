import {
  isFerestreUsiAluminiuGlisanteFatade,
  isFerestreUsiPvcInchideri,
} from '@/app/lib/consts/common';

export const getOfferStepsValues = (route: string) => {
  const stepsConfig: Record<string, { min: number; max: number }> = {
    '/': { min: 10, max: 25 },
    ...Object.fromEntries(
      [...isFerestreUsiPvcInchideri].map(route => [
        route,
        { min: 10, max: 15 },
      ]),
    ),
    ...Object.fromEntries(
      [...isFerestreUsiAluminiuGlisanteFatade].map(route => [
        route,
        { min: 10, max: 20 },
      ]),
    ),
  };

  return stepsConfig[route] || { min: 15, max: 25 };
};

export const getLocation = (route: string) => {
  const locations: Record<string, Record<string, string>> = {
    exportItalia: {
      ro: 'în zona Emilia-Romagna, Veneto, Padova',
      en: 'in the Emilia-Romagna, Veneto, Padova area',
      ru: 'в регионе Эмилия-Романья, Венето, Падуя',
    },
    exportIrlanda: {
      ro: 'în toată Irlanda',
      en: 'throughout Ireland',
      ru: 'по всей Ирландии',
    },
  };

  return locations[route] || { ro: '', en: '', ru: '' };
};
