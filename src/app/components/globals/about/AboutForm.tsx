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
import type { CountryCode } from "libphonenumber-js";
import { getCountryCallingCode } from "libphonenumber-js";

function AboutForm({ content }) {
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", phone: "" });
  const [selectedCountry, setSelectedCountry] = useState("md");
  const [isSuccess, setIsSuccess] = useState(false);

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
      const phonePrefix = getCountryCallingCode(
        selectedCountry.toUpperCase() as CountryCode,
      );
      setFormData({
        name: "",
        phone: phonePrefix,
      });
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className={`${styles.card} ${styles.formBox}`}>
      <div
        className={`${styles.aboutSectionTitle} ${styles.formTitle}`}
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
              if (country) setSelectedCountry(country.countryCode);
            }}
          />
          <ErrorBox errors={errors} />
          {isSuccess && (
            <div className={styles.successText}>{content("successText")}</div>
          )}
          <div className={styles.privacyText}>
            {content("formFields.privacyText")}
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          {content("formSubmit")} <ArrowIcon />
        </button>
      </form>
    </div>
  );
}

export default AboutForm;
