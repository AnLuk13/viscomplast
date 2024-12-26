"use client";

import React from "react";
import Select from "react-select";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";

function LanguageDropdown({
  showMobileSidebar,
}: {
  showMobileSidebar: boolean;
}) {
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const languageOptions = [
    { value: "ro", label: "Moldova", flag: "https://flagcdn.com/w320/md.png" },
    { value: "ru", label: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
    { value: "en", label: "English", flag: "https://flagcdn.com/w320/us.png" },
  ].map(({ value, label, flag }) => ({
    value,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={flag}
          alt={label}
          style={{
            width: 24,
            height: 24,
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    ),
  }));

  const languageStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "var(--background)",
      borderRadius: "99px",
      padding: 4,
      display: "flex",
      width: 48,
      boxSizing: "contain",
      border: "none",
      boxShadow: state.isFocused ? "none" : "none",
      "&:hover": {
        border: "none",
        boxShadow: "none",
      },
      "&:focus": {
        border: "none",
        outline: "none",
        boxShadow: "none",
      },
      "&:active": {
        border: "none",
        outline: "none",
        boxShadow: "none",
      },
    }),
    menu: (provided) => ({
      ...provided,
      padding: 0,
      ...(!showMobileSidebar && { top: "-140px" }),
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      borderRadius: 4,
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#000",
      padding: 0,
      "&:hover": {
        color: "#000",
        cursor: "pointer",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      width: 24,
      height: 24,
      display: "flex",
      alignItems: "center",
      padding: 0,
      cursor: "pointer",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      "&:hover": {
        backgroundColor: state.isSelected ? {} : "var(--background)", // Red hover for non-selected items
      },
      backgroundColor: state.isSelected ? "#519eff" : "transparent", // Red hover for non-selected items
    }),
  };

  return (
    <Select
      options={languageOptions}
      styles={languageStyles}
      defaultValue={languageOptions.find((opt) => opt.value === locale)}
      isSearchable={false}
      onChange={(selected) => {
        if (showMobileSidebar) {
          router.push(pathname, { locale: selected?.value, scroll: false });
        }
      }}
      instanceId="language-select"
    />
  );
}

export default LanguageDropdown;
