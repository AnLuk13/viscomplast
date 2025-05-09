export const customDropdownStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    fontFamily: "var(--font-family)",
    fontWeight: 400,
    color: "var(--primary)",
    display: "flex",
    border: "none",
    boxShadow: state.isFocused ? "none" : "none",
    cursor: "pointer",
    "&:hover": {
      // border: 'none',
      boxShadow: "none",
    },
    "&:focus": {
      // border: 'none',
      outline: "none",
      boxShadow: "none",
    },
    "&:active": {
      // border: 'none',
      outline: "none",
      boxShadow: "none",
    },
  }),
  menu: (provided) => ({
    ...provided,
    padding: 0,
    width: 130,
    boxSizing: "contain",
    left: "50%",
    transform: "translate(-50%, -3px)",
    outline: "1px solid #ccc",
    borderRadius: 8,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: 0,
    width: 130,
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
    width: 130,
    backgroundColor: state.isSelected ? "var(--secondary)" : "var(--primary)",
    "&:hover": {
      color: "var(--primary)",
      backgroundColor: "var(--secondary)",
      cursor: "pointer",
    },
  }),
};

export const phoneInputStyles = {
  inputStyle: {
    border: "1px solid var(--secondary-a50)",
    borderRadius: "99px",
    padding: "10px 20px 10px 70px",
    maxWidth: "374px",
    width: "100%",
    height: "60px",
    fontSize: "16px",
    fontFamily: "var(--font-family)",
    background: "var(--primary)",
  },
  buttonStyle: {
    border: "1px solid var(--secondary-a50)",
    borderRadius: "99px 0 0 99px",
    padding: "10px",
    background: "var(--primary)",
  },
  dropdownStyle: {
    left: 0,
    top: 49,
    width: 320,
    background: "var(--primary)",
  },
  searchStyle: {
    maxWidth: 320,
    width: "100%",
    background: "var(--primary)",
    fontSize: "16px",
    fontFamily: "var(--font-family)",
  },
};
