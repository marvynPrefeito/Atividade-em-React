import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

import { useState } from 'react';

export default function Questao7() {

  const filmes = [
    {
      id:'1',
      nome:'Vingadores',
      nota:9,
      categoria:'Ação',
      imagem:'https://picsum.photos/200'
    },

    {
      id:'2',
      nome:'Invocação do Mal',
      nota:8,
      categoria:'Terror',
      imagem:'https://picsum.photos/201'
    },

    {
      id:'3',
      nome:'Toy Story',
      nota:7,
      categoria:'Animação',
      imagem:'https://picsum.photos/202'
    },
  ];

  const [categoria, setCategoria] = useState('Todos');

  const listaFiltrada =
    categoria === 'Todos'
      ? filmes
      : filmes.filter(
          filme => filme.categoria === categoria
        );

  return (
    <View style={{ flex:1, padding:20 }}>

      <View style={{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:20
      }}>

        <TouchableOpacity
          onPress={() => setCategoria('Todos')}
        >
          <Text>Todos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategoria('Ação')}
        >
          <Text>Ação</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setCategoria('Terror')}
        >
          <Text>Terror</Text>
        </TouchableOpacity>

      </View>

      <FlatList
        data={listaFiltrada}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={{
            backgroundColor:
              item.nota > 8 ? '#90ee90' : '#ddd',
            padding:15,
            borderRadius:10,
            marginBottom:10
          }}>

            <Image
              source={{ uri:item.imagem }}
              style={{
                width:'100%',
                height:150,
                borderRadius:10
              }}
            />

            <Text>{item.nome}</Text>

            <Text>Nota: {item.nota}</Text>

            <Text>{item.categoria}</Text>

          </View>

        )}
      />

    </View>
  );
}