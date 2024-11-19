"use client";
import { createContext, useCallback, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsloading] = useState(false);
  const [screenWidth, setScreenWidth] = useState(-1);

  const handleLoading = (value) => {
    setIsloading(value);
  };

  const screenResize = useCallback(() => {
    setScreenWidth(screen.width);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", screenResize);
    return () => {
      window.removeEventListener("resize", screenResize);
    };
  }, [screenResize]);

  useEffect(() => {
    screenResize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <AppContext.Provider
      value={{
        handleLoading,
        screenWidth,
      }}
    >
      {/* <Loading isLoading={isLoading} /> */}
      {children}
    </AppContext.Provider>
  );
};
