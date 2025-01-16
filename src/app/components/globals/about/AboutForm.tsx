"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import ArrowIcon from "@/app/components/svg-icons/ArrowIcon";
import styles from "@/app/styles/globals/aboutSection.module.scss";

function AboutForm({ content }) {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleInputChange = (field: "name" | "phone", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", {
      ...formData,
      phone: `+${formData.phone}`,
    });
  };

  return (
    <div className={`${styles.card} ${styles.formBox}`}>
      <div className={styles.formContent}>
        <div
          className={styles.aboutSectionTitle}
          style={{ color: "var(--secondary)" }}
        >
          <BlinkIcon color="#18437e" />
          <div>{content("formTitle")}</div>
          <BlinkIcon color="#18437e" />
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputBox}>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={content("formFields.namePlaceholder")}
              className={styles.input}
              onChange={(event) =>
                handleInputChange("name", event.target.value)
              }
            />
            <PhoneInput
              country="md"
              enableSearch
              inputStyle={{
                border: "1px solid var(--secondary-a50)",
                borderRadius: "99px",
                padding: "10px 20px 10px 70px",
                maxWidth: "374px",
                width: "100%",
                height: "60px",
                fontSize: "16px",
                fontFamily: "var(--font-family)",
                background: "var(--primary)",
              }}
              buttonStyle={{
                border: "1px solid var(--secondary-a50)",
                borderRadius: "99px 0 0 99px",
                padding: "10px",
                background: "var(--primary)",
              }}
              dropdownStyle={{
                left: 0,
                top: 49,
                width: 320,
                background: "var(--primary)",
              }}
              searchStyle={{
                maxWidth: 320,
                width: "100%",
                background: "var(--primary)",
                fontSize: "16px",
                fontFamily: "var(--font-family)",
              }}
              onChange={(phone) => handleInputChange("phone", phone)}
            />
            <div className={styles.privacyText}>
              {content("formFields.privacyText")}
            </div>
          </div>
          <button type="submit" className={styles.submitButton}>
            {content("formSubmit")} <ArrowIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AboutForm;
