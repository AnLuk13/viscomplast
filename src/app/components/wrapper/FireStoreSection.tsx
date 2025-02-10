"use client";

import React from "react";
import { useFirestoreQuery } from "@/app/lib/hooks/useRetrieveData";
import { documentIdToCamelCase } from "@/app/lib/utils/documentIdToCamelCase";
import { useLocale } from "next-intl";
import { MoonLoader } from "react-spinners";

type FirestoreSectionProps = {
  route: string;
  Component: React.FC<{ data: any; locale: string }>;
};

function FirestoreSection({ route, Component }: FirestoreSectionProps) {
  const locale = useLocale();
  const documentId = documentIdToCamelCase(Component?.displayName);
  const { data, isLoading, error } = useFirestoreQuery(
    route,
    documentId,
    `${route}-${documentId}`,
  );
  console.log("route", route);
  console.log("componentName", documentId);

  if (!isLoading && (error || !data)) {
    return <div className="errorMessage">{error.message}</div>;
  }

  return (
    <>
      {isLoading ? (
        <div className="loadingSpinner">
          <MoonLoader color="var(--secondary)" size={60} />
        </div>
      ) : (
        <Component data={data} locale={locale} />
      )}
    </>
  );
}

export default FirestoreSection;
