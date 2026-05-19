import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Cadastro from "./src/screens/Cadastro";
import Perfil from "./src/screens/Perfil";
import Devs from "./src/screens/Devs";

import TabBar from "./src/components/TabBar";
import { UserProvider } from "./src/context/UserContext";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBar={(props) => <TabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}
        >
          <Tab.Screen name="Cadastro" component={Cadastro} />
          <Tab.Screen name="Perfil" component={Perfil} />
          <Tab.Screen name="Devs" component={Devs} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}