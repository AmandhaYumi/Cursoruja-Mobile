import { View, Text, Image, ScrollView, ImageBackground }
from "react-native";

import { globalStyles }
from "../styles/Global";

export default function Devs() {

  return (

    <ImageBackground
      source={require("../assets/background.png")}
      style={{ flex: 1 }}
      resizeMode="cover"
    >

      <ScrollView
        contentContainerStyle={{
          alignItems: "center",
          paddingBottom: 40,
          paddingTop: 20
        }}
      >

        <Text style={globalStyles.tituloSecao}>
          Desenvolvedores
        </Text>

        <View style={globalStyles.cardDados}>

          <Image
            source={require("../assets/amandha.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: "center",
              marginBottom: 10
            }}
          />

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Nome:</Text> Amandha Toyota
          </Text>

          <Text style={globalStyles.textoDados}>
            RM: 563549
          </Text>

        </View>

        <View style={globalStyles.cardDados}>

          <Image
            source={require("../assets/erick.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: "center",
              marginBottom: 10
            }}
          />

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Nome:</Text> Erick Nakajune
          </Text>

          <Text style={globalStyles.textoDados}>
            RM: 566059
          </Text>

        </View>

        <View style={globalStyles.cardDados}>

          <Image
            source={require("../assets/giovanna.png")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
              alignSelf: "center",
              marginBottom: 10
            }}
          />

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Nome:</Text> Giovana Bardella
          </Text>

          <Text style={globalStyles.textoDados}>
            RM: 561439
          </Text>

        </View>

      </ScrollView>

    </ImageBackground>
  );
}