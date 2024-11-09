"use client";

import { useEffect, useState } from "react";
import Promodal from "@/components/promodal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <>
      <Promodal />
    </>
  );
};

export default ModalProvider;
