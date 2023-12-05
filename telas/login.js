import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../css/estilo';

const Login = () => {
  const navigation = useNavigation();
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleStartPressed = () => {
    console.log(name, email);
    navigation.navigate('Sobre');
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.paragrafo}>LOGIN</Text>
        <TextInput
          style={styles.paragrafo}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.paragrafo}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.botao} onPress={handleStartPressed}>
          <Text style={styles.corBotao}> Logar </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
