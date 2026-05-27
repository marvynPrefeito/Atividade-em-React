import {
  View,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { useState } from 'react';

export default function Questao6() {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function entrar() {

    if(email === '' || senha === '') {
      setErro('Preencha todos os campos');
      return;
    }

    if(senha.length < 6) {
      setErro('Senha menor que 6 caracteres');
      return;
    }

    setErro('Login realizado');
  }

  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      padding:20
    }}>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10,
          marginBottom:10
        }}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10
        }}
      />

      <TouchableOpacity
        onPress={entrar}
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
          Entrar
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop:20 }}>
        {erro}
      </Text>

    </View>
  );
}