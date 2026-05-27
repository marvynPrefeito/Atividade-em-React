import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { useState } from 'react';

export default function Questao11() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [curso, setCurso] = useState('');

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      padding:20
    }}>

      <TextInput
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10,
          marginBottom:10
        }}
      />

      <TextInput
        placeholder="Idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10,
          marginBottom:10
        }}
      />

      <TextInput
        placeholder="Curso"
        value={curso}
        onChangeText={setCurso}
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor:'blue',
          padding:15,
          borderRadius:10,
          marginTop:20
        }}
      >
        <Text style={{
          color:'#fff',
          textAlign:'center'
        }}>
          Enviar
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop:30 }}>

        <Text>Nome: {nome}</Text>

        <Text>Idade: {idade}</Text>

        <Text>Curso: {curso}</Text>

      </View>

    </View>
  );
}