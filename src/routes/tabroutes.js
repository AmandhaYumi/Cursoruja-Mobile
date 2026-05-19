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

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "Cadastro") {
            iconName = "create-outline";
          } else if (route.name === "Perfil") {
            iconName = "person-outline";
          } else if (route.name === "Devs") {
            iconName = "laptop-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Perfil" component={Perfil} />
      <Tab.Screen name="Devs" component={Devs} />
    </Tab.Navigator>
  );
}