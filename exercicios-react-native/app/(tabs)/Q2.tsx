import { View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function Questao2() {

  const [mostrar, setMostrar] = useState(false);

  return (
    <View
      style={{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}
    >

      <TouchableOpacity
        onPress={() => setMostrar(!mostrar)}
        style={{
          backgroundColor:'blue',
          padding:15,
          borderRadius:10
        }}
      >
        <Text style={{ color:'#fff' }}>
          Mostrar Perfil
        </Text>
      </TouchableOpacity>

      {mostrar && (
        <View style={{ marginTop:20 }}>
          <Text>Nome: Marvyn</Text>
          <Text>Idade: 16</Text>
          <Text>Curso: React Native</Text>
        </View>
      )}

    </View>
  );
}