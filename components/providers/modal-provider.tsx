"use client";

import { useState, useEffect } from "react";
import FilterModal from "@/components/modals/filter-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <FilterModal />;
};
