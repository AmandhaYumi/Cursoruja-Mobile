import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, ScrollView, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [nome, setNome] = useState('');
  const [curso, setCurso] = useState('');
  const [disciplina, setDisciplina] = useState('');
  const [descricao, setDescricao] = useState('');
  const [dados, setDados] = useState(null);
  useEffect(() => {
    console.log("Cursoruja iniciado com sucesso!");
  }, []);

  function enviar() {
    if (nome && curso) {
      setDados({ nome, curso, disciplina, descricao });
    } else {
      alert("Por favor, digitar os dados");
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={require('./assets/background.png')}style={styles.background}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <Image source={require('./assets/escrita.png')}style={styles.imagemTopo} />
          <View style={styles.containerForm}>
            <Text style={styles.tituloSecao}>Cadastro:</Text>

            <View style={styles.grupoInput}>
              <Text style={styles.label}>Nome:</Text>
              <TextInput style={styles.campoInput} value={nome} onChangeText={setNome} placeholder="Digite seu nome..."/>
            </View>

            <View style={styles.grupoInput}>
              <Text style={styles.label}>Curso:</Text>
              <TextInput style={styles.campoInput} value={curso} onChangeText={setCurso} placeholder="Digite seu curso..."/>
            </View>

            <View style={styles.grupoInput}>
              <Text style={styles.label}>Disciplina:</Text>
              <TextInput style={styles.campoInput} value={disciplina} onChangeText={setDisciplina} placeholder="Digite a disciplina..."/>
            </View>

            <View style={styles.grupoInput}>
              <Text style={styles.label}>Descrição:</Text>
              <TextInput style={[styles.campoInput, styles.textArea]} value={descricao} onChangeText={setDescricao}multilineplaceholder="Breve apresentação pessoal..."/>
            </View>

            <View style={styles.areaBotao}>
              <Button title="ENVIAR" onPress={enviar} color="#003300" />
            </View>
          </View>

          {dados && (
            <View style={styles.cardDados}>
              <Text style={styles.tituloDados}>Dados cadastrados:</Text>
              
              <View style={styles.infoo}>
                <Text style={styles.textoDados}>
                  <Text style={styles.bold}>Nome:</Text> {dados.nome}
                </Text>
              </View>

              <View style={styles.infoo}>
                <Text style={styles.textoDados}>
                  <Text style={styles.bold}>Curso:</Text> {dados.curso}
                </Text>
              </View>

              <View style={styles.infoo}>
                <Text style={styles.textoDados}>
                  <Text style={styles.bold}>Disciplina:</Text> {dados.disciplina}
                </Text>
              </View>

              <View style={styles.infoo}>
                <Text style={styles.textoDados}>
                  <Text style={styles.bold}>Descrição:</Text> {dados.descricao}
                </Text>
              </View>
            </View>
          )}

        </ScrollView>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1 
  },

  background: { 
    flex: 1 
  },

  scrollContent: { 
    padding: 20 
  },

  imagemTopo: {
    width: 400,
    height: 200,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 10
  },

  containerForm: {
    backgroundColor: 'rgba(0, 41, 20, 0.2)',
    borderRadius: 30,
    padding: 20,
    marginTop: 10,
  },

  tituloSecao: { 
    fontWeight: 'bold', 
    fontSize: 22, 
    marginBottom: 15,
    textAlign: 'center' 
  },

  grupoInput: { 
    marginBottom: 12 
  },

  label: { 
    fontWeight: 'bold', 
    marginBottom: 5,
    fontSize: 16 
  },

  campoInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 45,
    borderWidth: 1,
    borderColor: '#ddd',
  },

  textArea: { 
    height: 80, 
    paddingTop: 10, 
    borderRadius: 15 
  },

  areaBotao: {
    marginTop: 10,
    borderRadius: 25,
    overflow: 'hidden', 
  },

  cardDados: {
    marginTop: 25,
    backgroundColor: 'rgba(0, 40, 0, 0.85)', 
    borderRadius: 25,
    padding: 20,
    marginBottom: 40,
  },

  tituloDados: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },

  infoo: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.1)',
    paddingVertical: 8,
  },

  textoDados: { 
    color: '#A5D6A7',
    fontSize: 16 
  },

  bold: { 
    fontWeight: 'bold', 
    color: '#fff' 
  } 
});