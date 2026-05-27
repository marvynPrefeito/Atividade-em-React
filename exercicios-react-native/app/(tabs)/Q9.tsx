import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { useState } from 'react';

export default function Questao9() {

  const [nome, setNome] = useState('');
  const [nota, setNota] = useState('');
  const [lista, setLista] = useState<any[]>([]);

  function adicionar() {

    if(nome === '' || nota === '') return;

    const novo = {
      id: Date.now().toString(),
      nome,
      nota: Number(nota)
    };

    setLista([...lista, novo]);

    setNome('');
    setNota('');
  }

  const notas = lista.map(item => item.nota);

  const media =
    notas.length > 0
      ? (
          notas.reduce((a,b) => a + b, 0)
          / notas.length
        ).toFixed(2)
      : 0;

  const maior =
    notas.length > 0
      ? Math.max(...notas)
      : 0;

  const menor =
    notas.length > 0
      ? Math.min(...notas)
      : 0;

  return (
    <View style={{ flex:1, padding:20 }}>

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
        placeholder="Nota"
        value={nota}
        onChangeText={setNota}
        keyboardType="numeric"
        style={{
          borderWidth:1,
          padding:10,
          borderRadius:10
        }}
      />

      <TouchableOpacity
        onPress={adicionar}
        style={{
          backgroundColor:'blue',
          padding:15,
          borderRadius:10,
          marginTop:10
        }}
      >
        <Text style={{
          color:'#fff',
          textAlign:'center'
        }}>
          Adicionar
        </Text>
      </TouchableOpacity>

      <Text style={{ marginTop:20 }}>
        Média: {media}
      </Text>

      <Text>
        Maior Nota: {maior}
      </Text>

      <Text>
        Menor Nota: {menor}
      </Text>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{
            backgroundColor:'#ddd',
            padding:15,
            borderRadius:10,
            marginTop:10
          }}>

            <Text>{item.nome}</Text>

            <Text>{item.nota}</Text>

          </View>
        )}
      />

    </View>
  );
}