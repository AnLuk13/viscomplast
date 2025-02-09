"use client";

import React from "react";
import styles from "@/app/styles/text-page/textPage.module.scss";
import Footer from "@/app/components/footer/Footer";
import { useTranslations } from "next-intl";

function TextPage({ route }: { route: string }) {
  const t = useTranslations(route);
  return (
    <main className="mainContainer">
      <section
        className="sectionContainer"
        style={{
          flex: "1",
        }}
      >
        <div className={styles.contentContainer}>
          <div className={styles.pageTitle}>{t("pageTitle")}</div>
          {t.raw("content").map((box) => (
            <div key={box.title} className={styles.contentBox}>
              <div className={styles.contentBoxTitle}>{box.title}</div>
              <div className={styles.contentBoxDescription}>
                {box.description}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}

export default TextPage;
