// src/navigation/AppTabs.js
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeStack from "./HomeStack"; // Importe a Stack Navigator
import StretchingScreen from "../pages/StretchingScreen";

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === "Início") iconName = "home-outline";
          else if (route.name === "Recomendações") iconName = "fitness-outline";
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#d55a2d", // Cor do ícone do tab ativo
        tabBarInactiveTintColor: "#FFFFFF", // Cor do ícone do tab inativo
        tabBarStyle: {
          backgroundColor: "#000000", // Cor de fundo da barra de navegação
        },
      })}
    >
      <Tab.Screen
        name="Início"
        component={HomeStack} // Use a Stack Navigator aqui
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Recomendações"
        component={StretchingScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;
