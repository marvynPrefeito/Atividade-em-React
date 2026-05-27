import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Questao1() {

  const [numero, setNumero] = useState(0);

  function aumentar() {
    setNumero(numero + 1);
  }

  function diminuir() {

    if (numero > 0) {
      setNumero(numero - 1);
    }

  }

  return (
    <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}
    >

      <Text
        style={{
          fontSize:60,
          color: numero > 10 ? 'red' : 'black'
        }}
      >
        {numero}
      </Text>

      <TouchableOpacity
        onPress={aumentar}
        style={{
          backgroundColor:'blue',
          padding:15,
          borderRadius:10,
          marginTop:20
        }}
      >

        <Text style={{ color:'#fff' }}>
          Incrementar
        </Text>

      </TouchableOpacity>

      <TouchableOpacity
        onPress={diminuir}
        style={{
          backgroundColor:'red',
          padding:15,
          borderRadius:10,
          marginTop:20
        }}
      >

        <Text style={{ color:'#fff' }}>
          Decrementar
        </Text>

      </TouchableOpacity>

    </View>
  );
}