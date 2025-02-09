"use client";

import CatalogPage from "@/app/pages/CatalogPage";
import { useParams } from "next/navigation";
import ExportPage from "@/app/pages/ExportPage";
import { routeToCamelCase } from "@/app/lib/utils/routeToCamelCase";
import {
  catalogRoutes,
  exportRoutes,
  specialRoutes,
} from "@/app/lib/consts/common";
import InvalidPage from "@/app/pages/InvalidPage";

function Page() {
  const { id } = useParams();
  const route = routeToCamelCase(id as string);
  if (specialRoutes[route]) {
    const Component = specialRoutes[route];
    return <Component route={route} />;
  }
  return exportRoutes.includes(route) ? (
    <ExportPage route={route} />
  ) : catalogRoutes.includes(route) ? (
    <CatalogPage route={route} />
  ) : (
    <InvalidPage />
  );
}

export default Page;
