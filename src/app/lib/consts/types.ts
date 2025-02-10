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

export type SponsorImage = {
  id: number;
  src: string;
  alt: string;
};

export type SponsorsData = {
  metadata: {
    title: Record<string, string>; // Adjust type based on your Firestore structure
    description: Record<string, string>; // Adjust type based on your Firestore structure
  };
  images: SponsorImage[];
};
