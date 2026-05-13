import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Perfil({ route, navigation }) {
  const { nome, curso, disciplina, descricao } = route.params;

  return (
    <View style={globalStyles.container}>

      <Text style={globalStyles.tituloSecao}>Perfil</Text>

      <Text style={globalStyles.textoDados}>
        <Text style={globalStyles.bold}>Nome:</Text> {nome}
      </Text>

      <Text style={globalStyles.textoDados}>
        <Text style={globalStyles.bold}>Curso:</Text> {curso}
      </Text>

      <Text style={globalStyles.textoDados}>
        <Text style={globalStyles.bold}>Disciplina:</Text> {disciplina}
      </Text>

      <Text style={globalStyles.textoDados}>
        <Text style={globalStyles.bold}>Descrição:</Text> {descricao}
      </Text>

      <Button title="Ver Devs" onPress={() => navigation.navigate("Devs")} />
    </View>
  );
}