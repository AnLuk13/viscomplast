export type NavTab = {
  type: "link" | "dropdown";
  label: string;
  href?: string; // Only for 'link'
  defaultValue?: { value: string; label: string }; // Only for 'dropdown'
  options?: { value: string; label: string }[]; // Only for 'dropdown'
};
