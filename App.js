import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './telas/splash';
import Login from './telas/login';
import Sobre from './telas/sobre';
import Questao1 from './telas/questao1';
import Questao2 from './telas/questao2';
import Questao3 from './telas/questao3';
import Questao4 from './telas/questao4';
import Questao5 from './telas/questao5';
import Resultado from './telas/resultado';

const Stack = createNativeStackNavigator();

const App = () => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const handleCorrectAnswer = () => {
    setCorrectAnswers((correctAnswers) => correctAnswers + 1);
  };

  const handleRestartQuiz = () => {
    setCorrectAnswers(0);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Questao1" options={{ headerShown: false }}>
          {(props) => (
            <Questao1 {...props} onCorrectAnswer={handleCorrectAnswer} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Questao2" options={{ headerShown: false }}>
          {(props) => (
            <Questao2 {...props} onCorrectAnswer={handleCorrectAnswer} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Questao3" options={{ headerShown: false }}>
          {(props) => (
            <Questao3 {...props} onCorrectAnswer={handleCorrectAnswer} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Questao4" options={{ headerShown: false }}>
          {(props) => (
            <Questao4 {...props} onCorrectAnswer={handleCorrectAnswer} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Questao5" options={{ headerShown: false }}>
          {(props) => (
            <Questao5 {...props} onCorrectAnswer={handleCorrectAnswer} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Resultado" options={{ headerShown: false }}>
          {(props) => (
            <Resultado
              {...props}
              score={correctAnswers}
              onRestartQuiz={handleRestartQuiz}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;