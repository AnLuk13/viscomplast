export const customStyles = {
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

export const languageStyles = {
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
