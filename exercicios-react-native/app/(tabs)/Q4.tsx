import { View, Text } from 'react-native';

type Props = {
  title:string;
  price:number;
  description:string;
  inStock:boolean;
};

function ProductCard(props:Props) {

  return (
    <View style={{
      backgroundColor:'#ddd',
      padding:20,
      borderRadius:10,
      marginBottom:15,
      opacity: props.inStock ? 1 : 0.4
    }}>

      <Text style={{ fontSize:20 }}>
        {props.title}
      </Text>

      <Text>
        R$ {props.price}
      </Text>

      <Text>
        {props.description}
      </Text>

      {!props.inStock && (
        <Text style={{
          color:'red',
          marginTop:10
        }}>
          Indisponível
        </Text>
      )}

    </View>
  );
}

export default function Questao4() {

  return (
    <View style={{ flex:1, padding:20 }}>

      <ProductCard
        title="Notebook"
        price={3500}
        description="Notebook Gamer"
        inStock={true}
      />

      <ProductCard
        title="Mouse"
        price={200}
        description="Mouse RGB"
        inStock={false}
      />

      <ProductCard
        title="Teclado"
        price={300}
        description="Teclado Mecânico"
        inStock={true}
      />

      <ProductCard
        title="Monitor"
        price={1200}
        description="Monitor 240Hz"
        inStock={false}
      />

    </View>
  );
}