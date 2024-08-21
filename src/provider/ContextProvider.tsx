import React, { createContext, ReactNode, useRef } from "react";

export interface ContextValue {
  aboutRef: React.MutableRefObject<HTMLDivElement | null>;
  HowToBuyRef: React.MutableRefObject<HTMLDivElement | null>;
  TokenomicsRef: React.MutableRefObject<HTMLDivElement | null>;
  RoadmapRef: React.MutableRefObject<HTMLDivElement | null>;
  scrollTo: (ref: React.RefObject<HTMLDivElement>) => void;
  scrollToTop: () => void;
}

interface ContextProps {
  children: ReactNode;
}

export const InfoContext = createContext<ContextValue | undefined>(undefined);

const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const HowToBuyRef = useRef<HTMLDivElement>(null);
  const TokenomicsRef = useRef<HTMLDivElement>(null);
  const RoadmapRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const element = ref.current;
      const elementRect = element.getBoundingClientRect();
      const bodyRect = document.body.getBoundingClientRect();

      const scrollToY =
        elementRect.top -
        bodyRect.top -
        (window.innerHeight / 2 - elementRect.height / 2);

      window.scrollTo({
        top: scrollToY,
        behavior: "smooth",
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const dataObject: ContextValue = {
    aboutRef,
    HowToBuyRef,
    TokenomicsRef,
    RoadmapRef,
    scrollToTop,
    scrollTo,
  };

  return (
    <InfoContext.Provider value={dataObject}>{children}</InfoContext.Provider>
  );
};

export default ContextProvider;
