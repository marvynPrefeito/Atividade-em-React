import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList
} from 'react-native';

import { useState } from 'react';

export default function Questao5() {

  const [tarefa, setTarefa] = useState('');
  const [lista, setLista] = useState<any[]>([]);

  function adicionar() {

    if (tarefa === '') return;

    const nova = {
      id: Date.now().toString(),
      nome: tarefa,
      concluida:false
    };

    setLista([...lista, nova]);
    setTarefa('');
  }

  function concluir(id:string) {

    const novaLista = lista.map(item => {

      if(item.id === id) {
        return {
          ...item,
          concluida: !item.concluida
        };
      }

      return item;
    });

    setLista(novaLista);
  }

  function remover(id:string) {

    const novaLista = lista.filter(
      item => item.id !== id
    );

    setLista(novaLista);
  }

  const concluidas = lista.filter(
    item => item.concluida
  ).length;

  return (
    <View style={{ flex:1, padding:20 }}>

      <TextInput
        placeholder="Digite a tarefa"
        value={tarefa}
        onChangeText={setTarefa}
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
        Concluídas: {concluidas}
      </Text>

    </View>
  );
}