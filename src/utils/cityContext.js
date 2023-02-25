import { createContext, useState } from "react";

export const cityContext = createContext();

export default function CityProvider({ children }) {
  const [region, setRegion] = useState([]);

  return (
    <cityContext.Provider value={{ region, setRegion }}>
      {children}
    </cityContext.Provider>
  );
}
