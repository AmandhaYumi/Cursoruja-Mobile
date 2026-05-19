import { useContext } from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import { UserContext } from "../context/UserContext";
import { globalStyles } from "../styles/Global";

export default function Perfil() {
  const { user } = useContext(UserContext);

  if (!user.nome) {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        style={globalStyles.background}
      >
        <View style={[
          globalStyles.container,
          { justifyContent: "center", alignItems: "center" }
        ]}>
          <Text style={globalStyles.tituloSecao}>
            Faça o cadastro primeiro
          </Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={globalStyles.background}
    >
      <View style={[
        globalStyles.container,
        { alignItems: "center", paddingTop: 40 }
      ]}>

        <Text style={globalStyles.tituloSecao}>
          Perfil do Usuário
        </Text>

        {user.foto && (
          <Image
            source={{ uri: user.foto }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              marginBottom: 20
            }}
          />
        )}

        <View style={[
          globalStyles.cardDados,
          { width: "90%" }
        ]}>

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Nome:</Text> {user.nome}
          </Text>

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Curso:</Text> {user.curso}
          </Text>

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Disciplina:</Text> {user.disciplina}
          </Text>

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Descrição:</Text> {user.descricao}
          </Text>

          <Text style={globalStyles.textoDados}>
            <Text style={globalStyles.bold}>Endereço:</Text> {user.endereco}
          </Text>

        </View>

      </View>
    </ImageBackground>
  );
}