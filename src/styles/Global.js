import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1
  },

  background: {
    flex: 1
  },

  scrollContent: {
    padding: 20,
    paddingBottom: 40
  },

  containerForm: {
    backgroundColor: 'rgba(0, 41, 20, 0.2)',
    borderRadius: 30,
    padding: 20,
    marginTop: 10
  },

  tituloSecao: {
    fontWeight: 'bold',
    fontSize: 22,
    marginBottom: 20,
    textAlign: 'center'
  },

  campoInput: {
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingHorizontal: 20,
    height: 48,

    marginBottom: 12, 

    fontSize: 15
  },

  textArea: {
    height: 90,
    textAlignVertical: "top"
  },

  imagemTopo: {
    width: 380,
    height: 180,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 10,
    marginBottom: 10
  },

  cardDados: {
    marginTop: 25,
    backgroundColor: 'rgba(0, 40, 0, 0.85)',
    borderRadius: 25,
    padding: 20
  },

  tituloDados: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center'
  },

  textoDados: {
    color: '#A5D6A7',
    fontSize: 16,
    marginBottom: 6
  },

  bold: {
    fontWeight: 'bold',
    color: '#fff'
  }
});