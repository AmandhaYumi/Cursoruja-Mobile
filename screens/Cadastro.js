import { useState } from "react";
import { View, Text, TextInput, Button, Image, ImageBackground, ScrollView } from "react-native";
import { globalStyles } from "../styles/Global";

export default function Cadastro({ navigation }) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState("");

  function enviar() {
    navigation.navigate("Perfil", {
      nome,
      curso,
      disciplina,
      descricao,
    });
  }

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={globalStyles.background}
    >
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>

        <Image
          source={require("../../assets/escrita.png")}
          style={globalStyles.imagemTopo}
        />

        <View style={globalStyles.containerForm}>
          <Text style={globalStyles.tituloSecao}>Cadastro:</Text>

          <Text style={globalStyles.label}>Nome:</Text>
          <TextInput style={globalStyles.campoInput} onChangeText={setNome} />

          <Text style={globalStyles.label}>Curso:</Text>
          <TextInput style={globalStyles.campoInput} onChangeText={setCurso} />

          <Text style={globalStyles.label}>Disciplina:</Text>
          <TextInput style={globalStyles.campoInput} onChangeText={setDisciplina} />

          <Text style={globalStyles.label}>Descrição:</Text>
          <TextInput
            style={[globalStyles.campoInput, globalStyles.textArea]}
            onChangeText={setDescricao}
            multiline
          />

          <Button title="ENVIAR" onPress={enviar} />
        </View>

      </ScrollView>
    </ImageBackground>
  );
}