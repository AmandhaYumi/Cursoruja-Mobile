import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import Cadastro from "../screens/Cadastro";
import Perfil from "../screens/Perfil";
import Devs from "../screens/Devs";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#2e7d32",
        tabBarInactiveTintColor: "gray",

        tabBarIcon: ({ color, size }) => {
          let iconName = "ellipse-outline";

          switch (route.name) {
            case "Cadastro":
              iconName = "create-outline";
              break;

            case "Perfil":
              iconName = "person-outline";
              break;

            case "Devs":
              iconName = "laptop-outline";
              break;
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        }
      })}
    >

      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />

      <Tab.Screen
        name="Devs"
        component={Devs}
      />

    </Tab.Navigator>
  );
}