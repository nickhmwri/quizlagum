import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from '../css/estilo';

const Resultado = ({ score, navigation, onRestartQuiz }) => {
  const handleRestartPressed = () => {
    onRestartQuiz();
    navigation.navigate('Splash');
  };

  return (
    <View style={styles.containerSplash}>
      <Text style={styles.title}>O quiz acabou!</Text>
      <Text style={styles.score}>Sua pontuação foi: {score}/5</Text>
      <TouchableOpacity style={styles.botao} onPress={handleRestartPressed}>
        <Text style={styles.corBotao}>Reiniciar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Resultado;
