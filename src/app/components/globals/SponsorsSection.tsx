"use client";

import React, { useState } from "react";
import styles from "@/app/styles/globals/sponsorsSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import { doc, getDoc } from "firebase/firestore";
import { db, storage } from "@/app/lib/hooks/useRetrieveData";
import { getDownloadURL, listAll, ref } from "@firebase/storage";
import type { SponsorsData } from "@/app/lib/consts/types";

const Marquee = dynamic(
  () => import("react-fast-marquee").then((mod) => mod.default),
  {
    ssr: false,
  },
);

const OptimizedImage = dynamic(() => import("next/image"), {
  ssr: false,
  loading: () => (
    <div
      className="loadingSpinner"
      style={{
        height: 64,
        padding: 0,
        background: "transparent",
        marginRight: 128,
      }}
    >
      <MoonLoader color="var(--secondary)" size={44} />
    </div>
  ),
});

function SponsorsSection({ color }: { color: string }) {
  const locale = useLocale();

  const fetchSponsorsData = async (): Promise<SponsorsData> => {
    try {
      const docRef = doc(db, "sponsorsSection", "sponsorsSection");
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("Sponsors metadata not found in Firestore.");
      }

      const metadata = docSnap.data() as SponsorsData["metadata"];

      const storageRef = ref(storage, "sponsorsSection");
      const listResult = await listAll(storageRef);
      const images = await Promise.all(
        listResult.items.map(async (itemRef, index) => {
          const url = await getDownloadURL(itemRef);
          return {
            id: index, // Unique identifier (can be replaced with filename if needed)
            src: url, // Image URL
            alt: `Sponsor Image ${index + 1}`, // Alt text (optional)
          };
        }),
      );

      return { metadata, images };
    } catch (error) {
      console.error("Error fetching sponsors data:", error);
      throw error;
    }
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["sponsorsSection"],
    queryFn: fetchSponsorsData,
    staleTime: Infinity,
    gcTime: 30 * 60 * 1000,
  });
  const [loadingImages, setLoadingImages] = useState<{
    [key: string]: boolean;
  }>({});

  if (!isLoading && (error || !data)) {
    return <div className="errorMessage">Error fetching data!</div>;
  }

  return (
    <>
      {isLoading ? (
        <div className="loadingSpinner" style={{ background: color }}>
          <MoonLoader color="var(--secondary)" size={60} />
        </div>
      ) : (
        <section
          className={styles.sponsorsSection}
          style={{ background: color }}
        >
          <div className={styles.sponsorsSectionTitle}>
            <BlinkIcon color="#18437E" />
            <div>{data?.metadata.title[locale]}</div>
            <BlinkIcon color="#18437E" />
          </div>
          <div className={styles.description}>
            {data?.metadata.description[locale]}
          </div>
          <Marquee
            gradient
            gradientColor={color}
            gradientWidth={100}
            autoFill
            className={styles.marquee}
          >
            {data?.images.map((sponsor) => (
              <div
                key={sponsor.id}
                style={{ position: "relative", height: "100%" }} // instead of top
              >
                {loadingImages[sponsor.id] && (
                  <div
                    className="imageBlur"
                    style={{
                      background: "none",
                      // top: 0 // remove top
                    }}
                  />
                )}
                <OptimizedImage
                  width={100}
                  height={64}
                  key={sponsor.id}
                  alt={sponsor.alt}
                  src={sponsor.src}
                  quality={60}
                  className={`${styles.sponsorImage} ${
                    loadingImages[sponsor.id] ? "imageLoading" : ""
                  }`}
                  priority
                  onLoad={() =>
                    setLoadingImages((prev) => ({
                      ...prev,
                      [sponsor.id]: false,
                    }))
                  }
                />
              </div>
            ))}
          </Marquee>
        </section>
      )}
    </>
  );
}

export default SponsorsSection;
