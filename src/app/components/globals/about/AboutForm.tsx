"use client";

import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import ArrowIcon from "@/app/components/svg-icons/ArrowIcon";
import styles from "@/app/styles/globals/aboutSection.module.scss";
import PhoneInputField from "@/app/components/globals/about/PhoneInputField";
import NameInput from "@/app/components/globals/about/NameInput";
import phone from "phone";
import ErrorBox from "@/app/components/globals/about/ErrorBox";

function AboutForm({ content }) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [selectedCountry, setSelectedCountry] = useState("md"); // Default country

  const handleInputChange = (field: "name" | "phone", value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors({ name: "", phone: "" });
  };

  const isPhoneValid = () => {
    const result = phone(formData.phone, {
      country: selectedCountry,
      validateMobilePrefix: false,
    });
    return result.isValid;
  };

  const validateInputs = () => {
    const nameValid = formData.name.trim().length >= 3;
    const phoneValid = isPhoneValid();
    setErrors({
      name: nameValid ? "" : content("errorTexts.name"),
      phone: phoneValid ? "" : content("errorTexts.phone"),
    });
    return nameValid && phoneValid;
  };

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    if (!validateInputs()) return;

    const submissionData = {
      name: formData.name,
      phone: `+${formData.phone}`,
    };

    try {
      await fetch(`/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submissionData),
      });
    } catch (error) {
      console.error("An error occurred:", error);
    }
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
            <NameInput
              value={formData.name}
              placeholder={content("formFields.namePlaceholder")}
              onChange={(value) => handleInputChange("name", value)}
            />
            <PhoneInputField
              value={formData.phone}
              selectedCountry={selectedCountry}
              onChange={(value, country) => {
                handleInputChange("phone", value);
                if (country) setSelectedCountry(country.countryCode); // Dynamically update the country
              }}
            />
            <ErrorBox errors={errors} />
            <div className={styles.privacyText}>
              {content("formFields.privacyText")}
            </div>
          </div>
          <button type="submit" className={styles.submitBtn}>
            {content("formSubmit")} <ArrowIcon />
          </button>
        </form>
      </div>
    </div>
  );
}

export default AboutForm;
