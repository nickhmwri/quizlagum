import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerSplash: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C',
  },
  card: {
    padding: 20,
    backgroundColor: '#000',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 22,
    marginBottom: 30,
    color: '#FFf	',
    textAlign: 'center',
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 45, // Adicionando espaço para o ícone
    borderRadius: 5,
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  botao: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  corBotao: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  paragrafo: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff',
    borderWidth: 1,
    borderRadius: 5,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
});

export default estilo;
