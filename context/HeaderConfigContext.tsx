// HeaderConfigContext.tsx
import React, { createContext, useState, ReactNode } from "react";

export type HeaderSides = {
  left: "back" | "user" | "empty";
  center: "title" | "logo";
  right: "feature" | "empty";
};

export type HeaderOptions = {
  title?: string;
};

export type HeaderConfig = {
  sides: HeaderSides;
  options?: HeaderOptions;
};

type HeaderConfigContextType = {
  config: HeaderConfig;
  setConfig: (config: HeaderConfig) => void;
};

const defaultConfig: HeaderConfig = {
  sides: {
    left: "user",
    center: "logo",
    right: "feature",
  },
};

export const HeaderConfigContext = createContext<HeaderConfigContextType>({
  config: defaultConfig,
  setConfig: () => {},
});

export const HeaderConfigProvider = ({ children }: { children: ReactNode }) => {
  const [config, setConfig] = useState<HeaderConfig>(defaultConfig);

  return (
    <HeaderConfigContext.Provider value={{ config, setConfig }}>
      {children}
    </HeaderConfigContext.Provider>
  );
};
