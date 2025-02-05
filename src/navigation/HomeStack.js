// src/navigation/HomeStack.js
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation, useRoute } from "@react-navigation/native"; // Importar useNavigation e useRoute
import HomeScreen from "../pages/HomeScreen";
import StretchingScreen from "../pages/StretchingScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  const navigation = useNavigation();
  const route = useRoute();

  React.useEffect(() => {
    // Verificar se route e route.state existem
    if (route?.state?.index === 1) {
      navigation.navigate("Recomendações");
    }
  }, [route, navigation]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Início"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Recomendações"
        component={StretchingScreen}
        options={{
          title: "Alongamentos",
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
