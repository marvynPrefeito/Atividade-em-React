import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { useState } from 'react';

export default function Questao10() {

  const [posts, setPosts] = useState([
    {
      id:'1',
      usuario:'Marvyn',
      texto:'Olá pessoal!',
      curtidas:0
    },

    {
      id:'2',
      usuario:'João',
      texto:'React Native é incrível',
      curtidas:0
    },
  ]);

  function curtir(id:string) {

    const novaLista = posts.map(post => {

      if(post.id === id) {
        return {
          ...post,
          curtidas: post.curtidas + 1
        };
      }

      return post;
    });

    setPosts(novaLista);
  }

  function descurtir(id:string) {

    const novaLista = posts.map(post => {

      if(post.id === id && post.curtidas > 0) {
        return {
          ...post,
          curtidas: post.curtidas - 1
        };
      }

      return post;
    });

    setPosts(novaLista);
  }

  return (
    <View style={{ flex:1, padding:20 }}>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={{
            backgroundColor:'#ddd',
            padding:15,
            borderRadius:10,
            marginBottom:10
          }}>

            <Text>{item.usuario}</Text>

            <Text>{item.texto}</Text>

            <Text>
              Curtidas: {item.curtidas}
            </Text>

            <TouchableOpacity
              onPress={() => curtir(item.id)}
              style={{
                backgroundColor:'blue',
                padding:10,
                borderRadius:8,
                marginTop:10
              }}
            >
              <Text style={{
                color:'#fff',
                textAlign:'center'
              }}>
                Curtir
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => descurtir(item.id)}
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
                Descurtir
              </Text>
            </TouchableOpacity>

          </View>

        )}
      />

    </View>
  );
}