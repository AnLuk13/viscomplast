import React from "react";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import styles from "@/app/styles/aboutSection.module.scss";

function AboutContent() {
  return (
    <div className={`${styles.card} ${styles.contentBox}`}>
      <div className={styles.aboutSectionTitle}>
        <BlinkIcon color="#f3f8ff" />
        <div>Despre noi</div>
        <BlinkIcon color="#f3f8ff" />
      </div>
      <div className={styles.descriptionBox}>
        <div className={styles.description}>
          Suntem o companie clădită pe valorile unui business de familie al
          cărei intenție este să producă tâmplărie PVC și Aluminiu la cel mai
          înalt nivel.
        </div>
        <div className={styles.description}>
          Muncim împreună pentru a oferi servicii de calitate, un produs bun și
          pentru a construi relații de lungă durată. Consider că suntem mai
          puternici datorită abilităților complementare ale membrilor familiei
          și totodată datorită valorilor pe care ne bazăm: corectitudine,
          excelență, ambiție, eficiență și împlinire personală.
        </div>
        <div className={styles.description}>
          Strategia pe care am abordat-o încă de la început este aceea a unei
          creșteri naturale și organice, orientată absolut către client. Nu
          există problemă care nu poate fi soluționată în raport cu cerințele
          clientului.
        </div>
      </div>
    </div>
  );
}

export default AboutContent;
