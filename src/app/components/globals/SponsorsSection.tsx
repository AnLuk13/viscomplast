"use client";

import React, { useState } from "react";
import styles from "@/app/styles/globals/sponsorsSection.module.scss";
import BlinkIcon from "@/app/components/svg-icons/BlinkIcon";
import dynamic from "next/dynamic";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { fetchFirestoreDocument } from "@/app/lib/hooks/useRetrieveData";
import { MoonLoader } from "react-spinners";
import Image from "next/image";

const Marquee = dynamic(() =>
  import("react-fast-marquee").then((mod) => mod.default),
);

function SponsorsSection({ color }: { color: string }) {
  const locale = useLocale();
  const { data, isLoading, error } = useQuery({
    queryKey: ["sponsorsSection"],
    queryFn: () => fetchFirestoreDocument("sponsorsSection", "sponsorsSection"),
    staleTime: Infinity,
    gcTime: 30 * 60 * 1000,
  });
  const [loadingImages, setLoadingImages] = useState<{
    [key: string]: boolean;
  }>({});
  // const sponsors = manifest.sponsors;

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
            <div>{data?.title[locale]}</div>
            <BlinkIcon color="#18437E" />
          </div>
          <div className={styles.description}>{data?.description[locale]}</div>
          <Marquee
            gradient
            gradientColor={color}
            gradientWidth={100}
            autoFill
            className={styles.marquee}
          >
            {data?.sponsorsImages.map((sponsor) => (
              <div key={sponsor.id}>
                {loadingImages[sponsor.id] && (
                  <div
                    className="imageBlur"
                    style={{ background: "none", top: 0 }}
                  />
                )}
                <Image
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
