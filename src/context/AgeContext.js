// src/context/AgeContext.js
import React, { createContext, useState } from "react";

export const AgeContext = createContext();

export const AgeProvider = ({ children }) => {
  const [age, setAge] = useState(null);

  return (
    <AgeContext.Provider value={{ age, setAge }}>
      {children}
    </AgeContext.Provider>
  );
};
