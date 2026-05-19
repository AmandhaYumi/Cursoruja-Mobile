import { View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Navbar({ navigation }) {
  return (
    <View style={{
      flexDirection: "row",
      justifyContent: "space-around",
      backgroundColor: "#0a3d1c",
      padding: 10
    }}>

      <Pressable onPress={() => navigation.navigate("Cadastro")}>
        <Ionicons name="create-outline" size={24} color="white" />
        <Text style={{ color: "white" }}>Cadastro</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Perfil")}>
        <Ionicons name="person-outline" size={24} color="white" />
        <Text style={{ color: "white" }}>Perfil</Text>
      </Pressable>

      <Pressable onPress={() => navigation.navigate("Devs")}>
        <Ionicons name="laptop-outline" size={24} color="white" />
        <Text style={{ color: "white" }}>Devs</Text>
      </Pressable>

    </View>
  );
}