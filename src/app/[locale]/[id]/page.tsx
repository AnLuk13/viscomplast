"use client";

// import { useRouter } from '@/i18n/routing';

import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/routing";

export default function Page() {
  const params = useParams();
  const locale = useLocale();
  const pathname = usePathname();
  console.log(params);
  console.log(locale);
  console.log(pathname);
  const id = params.id;

  // const router = useRouter();
  // console.log(router);
  // const { id } = router.query;

  if (!id) {
    return <p>Loading...</p>; // Handle cases where `id` is undefined
  }

  return (
    <div>
      <h1>Dynamic Page</h1>
      <p>The ID is: {id}</p>
      {/* <button onClick={() => router2.push('/')} /> */}
    </div>
  );
}
