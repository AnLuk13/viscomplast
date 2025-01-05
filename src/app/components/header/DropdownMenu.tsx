import React from "react";
import { Link } from "@/i18n/routing";
import styles from "../../styles/heading.module.scss";

interface DropdownMenuProps {
  items: { label: string; path: string }[];
  handleItemClick: () => void;
}

function DropdownMenu({ items, handleItemClick }: DropdownMenuProps) {
  return (
    <ul className={styles.dropdownMenu}>
      {items.map((subItem) => (
        <li
          key={subItem.path}
          onClick={handleItemClick}
          className={styles.dropdownMenuItem}
        >
          <Link href={subItem.path} className={styles.navigationLinks}>
            {subItem.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
