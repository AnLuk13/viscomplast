import { useLocale } from 'next-intl';
import {
  getLocation,
  getOfferStepsValues,
} from '@/app/lib/hooks/getOfferStepsValues';
import { exportRoutes } from '@/app/lib/consts/common';

type Step = {
  stepNumber: number;
  description: string;
  title: string;
};

export function useOfferSteps(route: string, content) {
  const locale = useLocale();
  const { min, max } = getOfferStepsValues(route);
  const location = getLocation(route);

  return content
    .raw('offerSteps')
    .map((step: Step) => ({
      ...step,
      description: step.description
        .replace('{min}', min)
        .replace('{max}', max)
        .replace('{location}', location[locale]),
    }))
    .slice(0, route === 'exportFrantaBelgia' ? -1 : undefined) // Remove last step if needed
    .filter((step: Step) => exportRoutes.has(route) || step.stepNumber !== 4) // Remove step 4 if not an export route
    .map((step: Step, index: number) => ({
      ...step,
      stepNumber: index + 1, // Reset step numbers
    }));
}
