import FacebookIcon from "@/app/components/svg-icons/socials/FacebookIcon";
import InstagramIcon from "@/app/components/svg-icons/socials/InstagramIcon";
import ViberIcon from "@/app/components/svg-icons/socials/ViberIcon";
import WhatsappIcon from "@/app/components/svg-icons/socials/WhatsappIcon";
import type { NavTab } from "@/app/lib/consts/types";

export const navTabs: NavTab[] = [
  { type: "link", label: "Acasă", href: "/" },
  {
    type: "dropdown",
    label: "Ferestre",
    defaultValue: { value: "Ferestre", label: "Ferestre" },
    options: [
      { value: "dsfsdf", label: "asfafasdasd" },
      { value: "dsfsadfdgdg", label: "asfaf" },
    ],
  },
  {
    type: "dropdown",
    label: "Uși",
    defaultValue: { value: "Uși", label: "Uși" },
    options: [
      { value: "awew", label: "asfafui" },
      { value: "yutyut", label: "asfafsdf" },
    ],
  },
  {
    type: "dropdown",
    label: "Glisante",
    defaultValue: { value: "Glisante", label: "Glisante" },
    options: [
      { value: "nm,jj", label: "asfaf132" },
      { value: "fyuyrtytry", label: "asfafwer" },
    ],
  },
  { type: "link", label: "Închideri terase", href: "/" },
  { type: "link", label: "Fațade aluminiu", href: "/" },
  {
    type: "dropdown",
    label: "Export",
    defaultValue: { value: "Export", label: "Export" },
    options: [
      { value: "asdasdrty", label: "asfafdad" },
      { value: "asdasdjk", label: "asfafweqwe" },
      { value: "asdasdasd", label: "asdasdasdasd" },
    ],
  },
];

export const socialLinks = [
  { href: "https://www.facebook.com/Viscomplast/", Icon: FacebookIcon },
  { href: "https://www.instagram.com/viscomplast", Icon: InstagramIcon },
  {
    href: "https://api.whatsapp.com/send/?phone=37360414041&text&type=phone_number&app_absent=0",
    Icon: WhatsappIcon,
  },
  { href: "viber://chat?number=%2B37360414041", Icon: ViberIcon },
];
