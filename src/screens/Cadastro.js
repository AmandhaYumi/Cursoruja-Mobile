import { useContext, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";

import { globalStyles } from "../styles/Global";
import { UserContext } from "../context/UserContext";

export default function Cadastro({ navigation }) {
  const { setUser } = useContext(UserContext);

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [disciplina, setDisciplina] = useState("");
  const [descricao, setDescricao] = useState(""); 
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");

  async function buscarCEP() {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await res.json();

      if (data.erro) {
        alert("CEP inválido");
        return;
      }

      setEndereco(data.logradouro);
    } catch (error) {
      alert("Erro ao buscar CEP");
    }
  }

  function enviar() {
    if (!nome || !curso) {
      alert("Preencha os campos obrigatórios");
      return;
    }

    setUser({
      nome,
      curso,
      disciplina,
      descricao,
      cep,
      endereco,
      foto: null
    });

    navigation.navigate("Perfil");
  }

  return (
    <ImageBackground
      source={require("../assets/background.png")}
      style={globalStyles.background}
    >
      <ScrollView contentContainerStyle={globalStyles.scrollContent}>

        <Image
          source={require("../assets/escrita.png")}
          style={globalStyles.imagemTopo}
        />

        <View style={globalStyles.containerForm}>
          <Text style={globalStyles.tituloSecao}>Cadastro</Text>

          <TextInput
            placeholder="Nome"
            style={globalStyles.campoInput}
            onChangeText={setNome}
          />

          <TextInput
            placeholder="Curso"
            style={globalStyles.campoInput}
            onChangeText={setCurso}
          />

          <TextInput
            placeholder="Disciplina"
            style={globalStyles.campoInput}
            onChangeText={setDisciplina}
          />

          <TextInput
            placeholder="Descrição"
            style={[globalStyles.campoInput, globalStyles.textArea]}
            onChangeText={setDescricao}
            multiline
          />

          <TextInput
            placeholder="CEP"
            style={globalStyles.campoInput}
            keyboardType="numeric"
            onChangeText={setCep}
            onBlur={buscarCEP}
          />

          {endereco ? (
            <Text style={{ marginVertical: 5 }}>
              Endereço: {endereco}
            </Text>
          ) : null}

          <Button title="ENVIAR" onPress={enviar} />
        </View>

      </ScrollView>
    </ImageBackground>
  );
}