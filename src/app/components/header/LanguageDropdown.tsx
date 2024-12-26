"use client";

import React from "react";
import Select from "react-select";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { languageStyles } from "@/app/lib/consts/customStyles";

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

  return (
    <Select
      options={languageOptions}
      styles={languageStyles}
      defaultValue={languageOptions.find((opt) => opt.value === locale)}
      isSearchable={false}
      onChange={(selected) => {
        if (showMobileSidebar) {
          router.push(pathname, { locale: selected.value, scroll: false });
        }
      }}
      instanceId="language-select"
    />
  );
}

export default LanguageDropdown;
