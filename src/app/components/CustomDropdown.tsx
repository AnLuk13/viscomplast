"use client";

import React from "react";
import Select from "react-select";
import { useRouter } from "@/i18n/routing";

function CustomDropdown({ options, defaultValue }) {
  const router = useRouter();
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "transparent",
      fontFamily: "var(--font-family)",
      fontWeight: 400,
      color: "var(--primary)",
      padding: 4,
      display: "flex",
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
      width: 120,
      boxSizing: "contain",
      left: "50%",
      transform: "translate(-50%, -12%)",
      border: "1px solid #ccc",
      borderRadius: 8,
    }),
    menuList: (provided) => ({
      ...provided,
      padding: 0,
      width: 120,
      borderRadius: 8,
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
    indicatorSeparator: () => ({ display: "none" }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "var(--primary)",
      padding: 0,
      "&:hover": {
        color: "var(--primary)",
        cursor: "pointer",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      padding: 0,
      cursor: "pointer",
      color: "var(--primary)",
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: "pointer",
      fontFamily: "var(--font-family)",
      fontWeight: 400,
      boxSizing: "border-box",
      width: 120,
      backgroundColor: state.isSelected ? "var(--secondary)" : "var(--primary)",
      "&:hover": {
        color: "var(--primary)",
        backgroundColor: "var(--secondary)",
        cursor: "pointer",
      },
    }),
  };

  return (
    <Select
      options={options}
      styles={customStyles}
      value={defaultValue}
      defaultValue={defaultValue}
      onChange={(selected) => {
        router.push(`/${selected.value}`);
      }}
      components={{
        IndicatorSeparator: null,
      }}
      isSearchable={false}
      instanceId="nav-select"
    />
  );
}

export default CustomDropdown;
