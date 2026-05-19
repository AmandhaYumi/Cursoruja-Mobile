import { View, Text, Image } from "react-native";
import { globalStyles } from "../styles/Global";
import Navbar from "../components/Navbar";

export default function Devs({ navigation }) {
  return (
    <View style={globalStyles.container}>

      <Navbar navigation={navigation} showPerfil={true} />

      <Text style={globalStyles.tituloSecao}>
        Desenvolvedores
      </Text>

      <View style={{ alignItems: "center", marginBottom: 25 }}>
        <Image
          source={require("../assets/amandha.png")}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
        <Text style={globalStyles.textoDados}>
          <Text style={globalStyles.bold}>Nome:</Text> Amandha Toyota
        </Text>
        <Text style={globalStyles.textoDados}>
          RM: 563549
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 25 }}>
        <Image
          source={require("../assets/erick.png")}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
        <Text style={globalStyles.textoDados}>
          <Text style={globalStyles.bold}>Nome:</Text> Erick Nakajune
        </Text>
        <Text style={globalStyles.textoDados}>
          RM: 566059
        </Text>
      </View>

      <View style={{ alignItems: "center", marginBottom: 25 }}>
        <Image
          source={require("../assets/giovanna.png")}
          style={{ width: 120, height: 120, borderRadius: 60 }}
        />
        <Text style={globalStyles.textoDados}>
          <Text style={globalStyles.bold}>Nome:</Text> Giovana Bardella
        </Text>
        <Text style={globalStyles.textoDados}>
          RM: 561439
        </Text>
      </View>

    </View>
  );
}