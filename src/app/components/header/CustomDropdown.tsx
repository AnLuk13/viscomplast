"use client";

import React from "react";
import Select from "react-select";
import { useRouter } from "@/i18n/routing";
import { customDropdownStyles } from "@/app/lib/consts/customStyles";
import type { Option } from "@/app/lib/consts/types";

type CustomDropdownProps = {
  options: Option[]; // Define the shape of each option
  defaultValue: Option; // Define the shape of the defaultValue
};

function CustomDropdown({ options, defaultValue }: CustomDropdownProps) {
  const router = useRouter();

  return (
    <Select
      options={options}
      styles={customDropdownStyles}
      value={defaultValue}
      defaultValue={defaultValue}
      onChange={(selected) => {
        router.push(`/${selected?.value}`);
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
