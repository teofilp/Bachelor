import React, { createContext, PropsWithChildren, useState } from "react";
import Colors from "../constants/color";

export const ColorThemeContext = createContext({
  color: Colors.MaximumPurple,
  setColor: (_: string) => {} 
});

const ColorThemeContextProvider = ({ children }: PropsWithChildren<any>) => {
  const [color, setColor] = useState(Colors.MaximumPurple);

  const value = {
    color, setColor
  };
  
  return (
    <ColorThemeContext.Provider value={value}>
      {children}
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeContextProvider;
