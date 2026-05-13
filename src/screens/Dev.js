import { View, Text, Image } from "react-native";
import { globalStyles } from "../../styles/Global";

export default function Devs() {
  return (
    <View style={globalStyles.container}>

      <Text style={globalStyles.tituloSecao}>
        Desenvolvedores
      </Text>

      <View style={{ alignItems: "center", marginBottom: 25 }}>
        <Image
          source={require("../../assets/devs/amandha.png")}
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
          source={require("../../assets/devs/erick.png")}
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
          source={require("../../assets/devs/giovana.png")}
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