import {
  View,
  Text,
  TextInput
} from 'react-native';

import { useState } from 'react';

export default function Questao8() {

  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  function converterCelsius(valor:string) {

    setCelsius(valor);

    const numero = Number(valor);

    if(isNaN(numero)) {
      setFahrenheit('Valor inválido');
      return;
    }

    const resultado = numero * 1.8 + 32;

    setFahrenheit(resultado.toFixed(2));
  }

  function converterFahrenheit(valor:string) {

    setFahrenheit(valor);

    const numero = Number(valor);

    if(isNaN(numero)) {
      setCelsius('Valor inválido');
      return;
    }

    const resultado = (numero - 32) / 1.8;

    setCelsius(resultado.toFixed(2));
  }

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      padding:20
    }}>

      <Text>Celsius</Text>

      <TextInput
        value={celsius}
        onChangeText={converterCelsius}
        keyboardType="numeric"
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10,
          marginBottom:20
        }}
      />

      <Text>Fahrenheit</Text>

      <TextInput
        value={fahrenheit}
        onChangeText={converterFahrenheit}
        keyboardType="numeric"
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10
        }}
      />

    </View>
  );
}