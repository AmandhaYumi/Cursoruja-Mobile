import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./src/screens/Cadastro";
import Perfil from "./src/screens/Perfil";
import Devs from "./src/screens/Devs";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Devs" component={Devs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}