import React from "react";
import Logo from "@/app/components/svg-icons/Logo";
import PhoneIcon from "@/app/components/svg-icons/PhoneIcon";
import FacebookIcon from "@/app/components/svg-icons/socials/FacebookIcon";
import InstagramIcon from "@/app/components/svg-icons/socials/InstagramIcon";
import WhatsappIcon from "@/app/components/svg-icons/socials/WhatsappIcon";
import ViberIcon from "@/app/components/svg-icons/socials/ViberIcon";
import LanguageDropdown from "@/app/components/header/LanguageDropdown";
import { Link } from "@/i18n/routing";
import CustomDropdown from "@/app/components/CustomDropdown";
import styles from "./heading.module.scss";

function Heading() {
  return (
    <header className={styles.header}>
      <div className={styles.headerSection}>
        <div className={styles.headerContentBox}>
          <div className={styles.logoScheduleBox}>
            <Logo />
            <div className={styles.scheduleBox}>
              <div className={styles.scheduleTitle}>Program de lucru:</div>
              <div className={styles.scheduleTextBox}>
                <div className={styles.scheduleText}>Ln - Vn: 9:00 - 17:00</div>
                <div className={styles.scheduleText}>Sb: 9:00 - 12:00</div>
              </div>
            </div>
          </div>
          <div className={styles.socialBox}>
            <div className={styles.phoneBox}>
              <PhoneIcon />
              <div className={styles.phoneText}>060466177</div>
            </div>
            <div className={styles.phoneBox}>
              <PhoneIcon />
              <div className={styles.phoneText}>060414041</div>
            </div>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/Viscomplast/">
                <FacebookIcon />
              </a>
              <a href="https://www.instagram.com/viscomplast">
                <InstagramIcon />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=37360414041&text&type=phone_number&app_absent=0">
                <WhatsappIcon />
              </a>
              <a href="viber://chat?number=%2B37360414041">
                <ViberIcon />
              </a>
            </div>
            <LanguageDropdown />
          </div>
        </div>
      </div>
      <nav className={styles.navigationSection}>
        <div className={styles.navigationContent}>
          <Link className={styles.navLink} href="/">
            Acasă
          </Link>
          <CustomDropdown
            options={[
              { value: "dsfsdf", label: "asfafasdasd" },
              { value: "dsfsadfdgdg", label: "asfaf" },
            ]}
            defaultValue={{ value: "Ferestre", label: "Ferestre" }}
          />
          <CustomDropdown
            options={[
              { value: "awew", label: "asfaf" },
              { value: "yutyut", label: "asfaf" },
            ]}
            defaultValue={{ value: "Uși", label: "Uși" }}
          />
          <CustomDropdown
            options={[
              { value: "nm,jj", label: "asfaf" },
              { value: "fyuyrtytry", label: "asfaf" },
            ]}
            defaultValue={{ value: "Glisante", label: "Glisante" }}
          />
          <Link className={styles.navLink} href="/">
            Închideri terase
          </Link>
          <Link className={styles.navLink} href="/">
            Fațade aluminiu
          </Link>
          <CustomDropdown
            options={[
              { value: "asdasd", label: "asfaf" },
              { value: "asdasd", label: "asfaf" },
            ]}
            defaultValue={{ value: "Export", label: "Export" }}
          />
        </div>
      </nav>
    </header>
  );
}

export default Heading;
