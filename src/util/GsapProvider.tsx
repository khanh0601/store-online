"use client";
import { createContext, useContext, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GsapContext = createContext(gsap);

export const GsapProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log("GSAP initialized!");
  }, []);

  return (
    <GsapContext.Provider value={gsap}>{children}</GsapContext.Provider>
  );
};

export const useGsap = () => useContext(GsapContext);
