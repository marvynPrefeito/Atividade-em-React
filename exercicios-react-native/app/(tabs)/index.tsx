import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function Home() {

  const questoes = [1,2,3,4,5,6,7,8,9,10,11];

  return (
    <ScrollView
      contentContainerStyle={{
        padding:20,
        gap:15
      }}
    >

      {questoes.map((item) => (
        <TouchableOpacity
          key={item}
          onPress={() => router.push(`/questao${item}` as any)}
          style={{
            backgroundColor:'#007bff',
            padding:20,
            borderRadius:10
          }}
        >

          <Text
            style={{
              color:'#fff',
              fontSize:20,
              textAlign:'center'
            }}
          >
            Questão {item}
          </Text>

        </TouchableOpacity>
      ))}

    </ScrollView>
  );
}