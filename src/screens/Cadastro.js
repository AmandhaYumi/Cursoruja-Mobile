import { useContext, useState, useRef } from "react";

import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  ImageBackground,
  ScrollView
} from "react-native";

import {
  CameraView,
  useCameraPermissions
} from "expo-camera";

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

  const [foto, setFoto] = useState(null);

  const [mostrarCamera, setMostrarCamera] = useState(false);

  const [permission, requestPermission] = useCameraPermissions();

  const cameraRef = useRef(null);

  const [loading, setLoading] = useState(false);

  async function buscarCEP() {

    if (!cep || cep.length < 8) {
      alert("Digite um CEP válido");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        `https://viacep.com.br/ws/${cep}/json/`
      );

      const data = await res.json();

      if (data.erro) {
        alert("CEP não encontrado");
        setEndereco("");
        return;
      }

      setEndereco(data.logradouro);

    } catch (error) {
      alert("Erro ao buscar CEP");
    } finally {
      setLoading(false);
    }
  }

  async function tirarFoto() {

    try {

      if (!permission?.granted) {
        const result = await requestPermission();

        if (!result.granted) {
          alert("Permissão da câmera negada");
          return;
        }
      }

      if (!cameraRef.current) {
        alert("Câmera não disponível");
        return;
      }

      const photo = await cameraRef.current.takePictureAsync();

      if (!photo?.uri) {
        alert("Erro ao capturar foto");
        return;
      }

      setFoto(photo.uri);
      setMostrarCamera(false);

      alert("Foto capturada com sucesso!");

    } catch (error) {
      alert("Erro ao usar câmera");
    }
  }

  function enviar() {

  if (!nome || !curso || !cep) {
    alert("Preencha nome, curso e CEP");
    return;
  }

  setUser({
    nome,
    curso,
    disciplina,
    descricao,
    cep,
    endereco,
    foto
  });

  alert("Dados enviados com sucesso!");

  setNome("");
  setCurso("");
  setDisciplina("");
  setDescricao("");
  setCep("");
  setEndereco("");
  setFoto(null);

  navigation.navigate("Perfil");
}

  if (mostrarCamera) {
    return (
      <View style={{ flex: 1 }}>
        <CameraView
          ref={cameraRef}
          style={{ flex: 1 }}
        />

        <Button
          title="TIRAR FOTO"
          onPress={tirarFoto}
        />

        <Button
          title="CANCELAR"
          onPress={() => setMostrarCamera(false)}
        />
      </View>
    );
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

          <Text style={globalStyles.tituloSecao}>
            Cadastro
          </Text>

          {foto && (
            <Image
              source={{ uri: foto }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 60,
                alignSelf: "center",
                marginTop: 20,
                marginBottom: 10
              }}
            />
          )}

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
          {loading && (
            <Text style={{ marginVertical: 8, fontWeight: "bold" }}>
              🔄 Buscando endereço...
            </Text>
          )}

          {endereco ? (
            <Text style={{ marginVertical: 5 }}>
              Endereço: {endereco}
            </Text>
          ) : null}

          <Button
            title="TIRAR FOTO"
            onPress={() => setMostrarCamera(true)}
          />

          <Button
            title="ENVIAR"
            onPress={enviar}
          />

        </View>

      </ScrollView>
    </ImageBackground>
  );
}