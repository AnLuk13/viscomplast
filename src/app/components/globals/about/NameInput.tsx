"use client";

import React from "react";
import styles from "@/app/styles/globals/aboutSection.module.scss";

function NameInput({ value, placeholder, onChange }) {
  return (
    <input
      id="name"
      name="name"
      type="text"
      value={value}
      placeholder={placeholder}
      className={styles.input}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default NameInput;
