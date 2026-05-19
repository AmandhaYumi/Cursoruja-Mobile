import { NavigationContainer } from "@react-navigation/native";
import { UserProvider } from "./src/context/UserContext";
import TabRoutes from "./src/routes/tab.routes";

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <TabRoutes />
      </NavigationContainer>
    </UserProvider>
  );
}