import type { CSSProperties } from "react";
import React from "react";
import styles from "@/app/styles/heading.module.scss";

function ScheduleBox({ props }: { props: CSSProperties | undefined }) {
  return (
    <div className={styles.scheduleBox} style={props}>
      <div className={styles.scheduleTitle}>Program de lucru:</div>
      <div className={styles.scheduleTextBox}>
        <div className={styles.scheduleText}>Ln - Vn: 9:00 - 17:00</div>
        <div className={styles.scheduleText}>Sb: 9:00 - 12:00</div>
      </div>
    </div>
  );
}

export default ScheduleBox;
