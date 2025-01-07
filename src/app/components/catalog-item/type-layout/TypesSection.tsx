import React from "react";
import styles from "@/app/styles/catalog-item/typesSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import TypeCard from "@/app/components/catalog-item/type-layout/TypeCard";
import useIsLargeScreen from "@/app/lib/hooks/useIsLargeScreen";

type TypeLayoutProps = {
  data: {
    id: number;
    imageSrc: string;
    name: string;
    description?: string | undefined;
  }[];
  titleObj: { title: string; width: number; smallWidth: number };
};
function TypesSection({ data, titleObj }: TypeLayoutProps) {
  const isLargeScreen = useIsLargeScreen(860);
  return (
    <div className={styles.typesSection}>
      <div
        className={styles.sectionTitle}
        style={
          isLargeScreen
            ? { maxWidth: titleObj.width }
            : { maxWidth: titleObj.smallWidth }
        }
      >
        <BlinkIcon color="#18437E" />
        <div>{titleObj.title}</div>
        <BlinkIcon color="#18437E" />
      </div>
      <div className={styles.cardsBox}>
        {data.map((card) => (
          <TypeCard
            key={card.id}
            imageSrc={card.imageSrc}
            name={card.name}
            description={card.description || ""}
          />
        ))}
      </div>
    </div>
  );
}

export default TypesSection;
