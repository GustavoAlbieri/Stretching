// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AgeProvider } from "./src/context/AgeContext";
import AppTabs from "./src/navigation/AppTabs"; // Substitua pelo seu componente de navegação

export default function App() {
  return (
    <AgeProvider>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </AgeProvider>
  );
}
