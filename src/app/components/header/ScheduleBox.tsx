import type { CSSProperties } from "react";
import React from "react";
import styles from "@/app/styles/header/heading.module.scss";

function ScheduleBox({
  styleProps,
  content,
}: {
  styleProps: CSSProperties | undefined;
}) {
  return (
    <div className={styles.scheduleBox} style={styleProps}>
      <div className={styles.scheduleTitle}>{content("schedule.title")}</div>
      <div className={styles.scheduleTextBox}>
        <div className={styles.scheduleText}>
          {content("schedule.days.weekdays")}
        </div>
        <div className={styles.scheduleText}>
          {content("schedule.days.saturday")}
        </div>
      </div>
    </div>
  );
}

export default ScheduleBox;
