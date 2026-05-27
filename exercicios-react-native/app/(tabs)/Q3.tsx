import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { useState } from 'react';

export default function Questao3() {

  const [lista, setLista] = useState([
    { id:'1', nome:'Arroz', quantidade:2 },
    { id:'2', nome:'Feijão', quantidade:1 },
    { id:'3', nome:'Leite', quantidade:5 },
    { id:'4', nome:'Pão', quantidade:10 },
    { id:'5', nome:'Café', quantidade:1 },
    { id:'6', nome:'Ovos', quantidade:12 },
    { id:'7', nome:'Macarrão', quantidade:3 },
    { id:'8', nome:'Açúcar', quantidade:2 },
  ]);

  function remover(id:string) {

    const novaLista = lista.filter(
      item => item.id !== id
    );

    setLista(novaLista);
  }

  return (
    <View style={{ flex:1, padding:20 }}>

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={{
            backgroundColor:'#ddd',
            padding:15,
            borderRadius:10,
            marginBottom:10
          }}>

            <Text>{item.nome}</Text>

            <Text>
              Quantidade: {item.quantidade}
            </Text>

            <TouchableOpacity
              onPress={() => remover(item.id)}
              style={{
                backgroundColor:'red',
                padding:10,
                borderRadius:8,
                marginTop:10
              }}
            >
              <Text style={{
                color:'#fff',
                textAlign:'center'
              }}>
                Remover
              </Text>
            </TouchableOpacity>

          </View>

        )}
      />

    </View>
  );
}