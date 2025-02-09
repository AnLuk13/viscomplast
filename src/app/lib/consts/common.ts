import WhatsappIcon from "@/app/components/svg-icons/socials/WhatsappIcon";
import FacebookIcon from "@/app/components/svg-icons/socials/FacebookIcon";
import InstagramIcon from "@/app/components/svg-icons/socials/InstagramIcon";
import ViberIcon from "@/app/components/svg-icons/socials/ViberIcon";
import TextPage from "@/app/pages/TextPage";
import AboutUs from "@/app/pages/AboutUs";
import type React, { CSSProperties } from "react";

export const socialLinks = [
  { href: "https://www.facebook.com/Viscomplast/", Icon: FacebookIcon },
  { href: "https://www.instagram.com/viscomplast", Icon: InstagramIcon },
  {
    href: "https://api.whatsapp.com/send/?phone=37360414041&text&type=phone_number&app_absent=0",
    Icon: WhatsappIcon,
  },
  { href: "viber://chat?number=%2B37360414041", Icon: ViberIcon },
];

export const languages = [
  { value: "ro", label: "Moldova", flag: "https://flagcdn.com/w320/md.png" },
  { value: "ru", label: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
  { value: "en", label: "English", flag: "https://flagcdn.com/w320/us.png" },
];

export const catalogRoutes: string[] = [
  "ferestrePvc",
  "ferestreAluminiu",
  "usiPvc",
  "usiAluminiu",
  "glisantePvc",
  "glisanteAluminiu",
  "glisanteVekaMotion",
  "inchideriTerase",
  "fatadeAluminiu",
];

export const exportRoutes: string[] = [
  "exportItalia",
  "exportIrlanda",
  "exportFrantaBelgia",
];

export const specialRoutes: Record<string, React.FC<{ route?: string }>> = {
  termeniSiConditii: TextPage,
  politicaDeConfidentialitate: TextPage,
  despreNoi: AboutUs,
};

export const handlesDoorsPvcAluminum = ["usiPvc", "usiAluminiu"];
// export const handlesWindowsPvcAluminum = [
//   'ferestrePvc',
//   'ferestreAluminiu',
//   'inchideriTerase',
// ];
export const objectFit: Record<string, CSSProperties> = {
  cover: { objectFit: "cover" },
  contain: { objectFit: "contain" },
};
