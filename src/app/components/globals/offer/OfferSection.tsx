'use client';

import React from 'react';
import styles from '@/app/styles/globals/offerSection.module.scss';
import BlinkIcon from '@/app/components/svg-icons/BlinkIcon';
import OfferCard from '@/app/components/globals/offer/OfferCard';
import { useOfferSteps } from '@/app/lib/hooks/useOfferSteps';
import { useTranslations } from 'next-intl';

interface OfferSectionProps {
  bgColor: string;
  cardColor?: string;
  route: string;
}
function OfferSection({ bgColor, cardColor, route }: OfferSectionProps) {
  const t = useTranslations('offerSection');
  const steps = useOfferSteps(route, t);

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
