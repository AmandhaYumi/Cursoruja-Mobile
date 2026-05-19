import { View, Text, Image, Button } from "react-native";
import { useContext } from "react";
import { globalStyles } from "../styles/Global";
import { UserContext } from "../context/UserContext";

export default function Perfil({ navigation }) {
  const { user } = useContext(UserContext);

  if (!user.nome) {
    return (
      <View style={globalStyles.container}>
        <Text style={globalStyles.tituloSecao}>
          Faça o cadastro primeiro
        </Text>
      </View>
    );
  }

  return (
    <View style={globalStyles.container}>

      <Text style={globalStyles.tituloSecao}>Perfil</Text>

      {user.foto && (
        <Image
          source={{ uri: user.foto }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            alignSelf: "center",
            marginBottom: 15
          }}
        />
      )}

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

      <Button title="Ver Devs" onPress={() => navigation.navigate("Devs")} />
    </View>
  );
}