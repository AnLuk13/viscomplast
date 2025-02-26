'use client';

import React from 'react';
import styles from '@/app/styles/globals/offerSection.module.scss';
import BlinkIcon from '@/app/components/svg-icons/BlinkIcon';
import OfferCard from '@/app/components/globals/offer/OfferCard';
import { useLocale, useTranslations } from 'next-intl';

import {
  getLocation,
  getOfferStepsValues,
} from '@/app/lib/hooks/getOfferStepsValues';

interface OfferSectionProps {
  bgColor: string;
  cardColor?: string;
  route: string;
}
function OfferSection({ bgColor, cardColor, route }: OfferSectionProps) {
  const locale = useLocale();
  const t = useTranslations('offerSection');
  const { min, max } = getOfferStepsValues(route);
  const location = getLocation(route);
  const steps = t
    .raw('offerSteps')
    .slice(0, route === 'exportFrantaBelgia' ? -1 : undefined)
    .map((step: any) => ({
      ...step,
      description: step.description
        .replace('{min}', min)
        .replace('{max}', max)
        .replace('{location}', location[locale]),
    }));
  return (
    <section className={styles.offerSection} style={{ background: bgColor }}>
      <div className={styles.titleBox}>
        <div className={styles.offerSectionTitle}>
          <BlinkIcon color="#18437E" />
          <div>{t('title')}</div>
          <BlinkIcon color="#18437E" />
        </div>
      </div>
      <div className={styles.stepsContainer}>
        {steps.map(step => (
          <OfferCard
            cardColor={cardColor}
            key={step.stepNumber}
            stepNumber={step.stepNumber}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
}

export default OfferSection;
