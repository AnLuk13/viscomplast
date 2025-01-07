import FacebookIcon from "@/app/components/svg-icons/socials/FacebookIcon";
import InstagramIcon from "@/app/components/svg-icons/socials/InstagramIcon";
import ViberIcon from "@/app/components/svg-icons/socials/ViberIcon";
import WhatsappIcon from "@/app/components/svg-icons/socials/WhatsappIcon";
import type { NavTab } from "@/app/lib/consts/types";
import test from "../../../../public/assets/images/hero-section.png";

export const navTabs: NavTab[] = [
  { type: "link", label: "Acasă", href: "/" },
  {
    type: "dropdown",
    label: "Ferestre",
    defaultValue: { value: "Ferestre", label: "Ferestre" },
    options: [
      { value: "/ferestre-pvc", label: "PVC" },
      { value: "/ferestre-aluminiu", label: "Aluminiu" },
    ],
  },
  {
    type: "dropdown",
    label: "Uși",
    defaultValue: { value: "Uși", label: "Uși" },
    options: [
      { value: "/usi-pvc", label: "PVC" },
      { value: "/usi-aluminiu", label: "Aluminiu" },
    ],
  },
  {
    type: "dropdown",
    label: "Glisante",
    defaultValue: { value: "Glisante", label: "Glisante" },
    options: [
      { value: "/glisante-pvc", label: "PVC" },
      { value: "/glisante-aluminiu", label: "Aluminiu" },
      { value: "/glisante-veka-motion", label: "Veka Motion" },
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
      { value: "sdfsdfsdf", label: "sdfasdfasdf" },
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

export const catalogCards = [
  {
    title: "Ferestre",
    items: ["PVC", "ALUMINIU"],
    imageUrl: test,
  },
  {
    title: "Uși",
    items: ["PVC", "ALUMINIU"],
    imageUrl: test,
  },
  {
    title: "Glisante",
    items: ["PVC", "ALUMINIU", "VEKA MOTION"],
    imageUrl: test,
  },
  {
    title: "Închideri Terase",
    items: ["ALUMINIU"],
    imageUrl: test,
  },
  {
    title: "Fațade",
    items: ["ALUMINIU"],
    imageUrl: test,
  },
  {
    title: "Export",
    items: ["ITALIA", "IRLANDA", "FRANȚA / BELGIA"],
    imageUrl: test,
  },
];

export const offerSteps = [
  {
    stepNumber: 1,
    title: "Consultanție și Proiectare",
    description:
      "Managerii de vânzări vă vor ajuta să alegeți profilul, sticla, culoarea, feroneria pentru proiectul dumneavoastră. După care veți primi o ofertă de preț, cu toate detaliile discutate.",
  },
  {
    stepNumber: 2,
    title: "Măsurare",
    description:
      "La confirmarea comenzii, inginerul se va deplasa la dumneavoastră pentru a efectua măsurătorile finale.",
  },
  {
    stepNumber: 3,
    title: "Producere",
    description:
      "În funcție de complexitatea proiectului, termenul de execuție variază între 5 și 15 zile lucrătoare.",
  },
  {
    stepNumber: 4,
    title: "Instalare",
    description:
      "O echipă de montatori profesioniști se va deplasa la dumneavoastră pentru a vă instala tâmplăria în siguranță.",
  },
];

export const menuLinks = [
  { label: "Acasă", href: "/" },
  { label: "Ferestre", href: "/ferestre-pvc" },
  { label: "Uși", href: "/usi" },
  { label: "Glisante", href: "/glisante" },
  { label: "Închideri terase", href: "/terase" },
  { label: "Fațade aluminiu", href: "/fatade" },
  { label: "Export", href: "/export" },
];

export const infoLinks = [
  { label: "Politica de Confidențialitate", href: "/confidentialitate" },
  { label: "Termeni și Condiții", href: "/termeni" },
];

export const contactInfo = [
  { label: "+ (373) 60 414 041", type: "phone", href: "tel:+37360414041" },
  { label: "+ (373) 60 466 177", type: "phone", href: "tel:+37360466177" },
  {
    label: "Soseaua Hâncești 256/3, Chișinău",
    type: "address",
    href: "https://maps.app.goo.gl/zFWoBqPYUvfEfE2B6",
  },
  {
    label: "infoviscomplast@gmail.com",
    type: "email",
    href: "mailto:infoviscomplast@gmail.com",
  },
];
