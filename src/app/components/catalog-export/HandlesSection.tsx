"use client";

import React from "react";
import TypesLayout from "@/app/components/catalog-export/type-layout/TypesLayout";
import { MoonLoader } from "react-spinners";
import { useLocale } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { fetchFirestoreDocument } from "@/app/lib/hooks/useRetrieveData";
import { handlesDoorsPvcAluminum, objectFit } from "@/app/lib/consts/common";

function HandlesSection({ route }: { route: string }) {
  const locale = useLocale();
  const isDoorHandle = handlesDoorsPvcAluminum.includes(route);
  const collectionPath = isDoorHandle
    ? "handlesDoorsPvcAluminum"
    : "handlesWindowsPvcAluminum";
  const { data, isLoading, error } = useQuery({
    queryKey: [collectionPath],
    queryFn: () => fetchFirestoreDocument(collectionPath, collectionPath),
    staleTime: Infinity,
    gcTime: 30 * 60 * 1000,
  });

  if (!isLoading && (error || !data)) {
    return <div className="errorMessage">Error fetching data!</div>;
  }

  return (
    <>
      {isLoading ? (
        <div className="loadingSpinner">
          <MoonLoader color="var(--secondary)" size={60} />
        </div>
      ) : (
        <TypesLayout
          data={data!.types}
          title={data!.title}
          locale={locale}
          imgStyles={objectFit.contain}
        />
      )}
    </>
  );
}

export default HandlesSection;
