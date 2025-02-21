"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient()); // Now inside a valid Client Component

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
