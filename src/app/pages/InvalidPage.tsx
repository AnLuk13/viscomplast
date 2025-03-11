import React from 'react';
import styles from '@/app/components/buttons/offerButton.module.scss';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

function InvalidPage() {
  const t = useTranslations('invalidPage');
  return (
    <main className="mainContainer">
      <section
        className="sectionContainer"
        style={{
          flex: '1',
          justifyContent: 'center',
        }}
      >
        <div className="errorMessage" style={{ fontSize: 80, padding: 0 }}>
          404
        </div>
        <div
          className="errorMessage"
          style={{ fontSize: 28, padding: 0, textAlign: 'center' }}
        >
          {t('message')}
        </div>
        <Link
          href="/"
          className={styles.offerBtn}
          style={{ minWidth: 156, justifyContent: 'center' }}
        >
          {t('text')}
        </Link>
      </section>
    </main>
  );
}

export default InvalidPage;
