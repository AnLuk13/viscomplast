export type NavTab = {
  type: "link" | "dropdown";
  label: string;
  href?: string; // Only for 'link'
  defaultValue?: Option; // Only for 'dropdown'
  options?: Option[]; // Only for 'dropdown'
};

export type Option = {
  value: string;
  label: string;
};
