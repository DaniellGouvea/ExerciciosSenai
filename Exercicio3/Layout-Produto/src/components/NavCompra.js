import { StyleSheet, Text, View, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function NavCompra() {

    const imgItem = "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2013/1/532/g532BTPHON-o_front.jpeg"

  return (
    <View style={styles.container}>
        <Image
        style={{height: 237 /*750*/ , width:375 /*457*/}}
        source={{
          uri: imgItem
        }}
        />
        <View style={{flexDirection: 'row', gap: 7, marginTop: 10}}>
            <FontAwesome name="circle" size={10} color="lightgrey"/>
            <FontAwesome name="circle" size={15} color="#57CE93" />
            <FontAwesome name="circle" size={10} color="lightgrey" />
            <FontAwesome name="circle" size={10} color="lightgrey" />
            <FontAwesome name="circle" size={10} color="lightgrey" />
        </View>
        
        <Text style={styles.texto}>Harman/Kardon BT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-',
    alignItems: 'center',
    // backgroundColor: '#57CE93',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
  },
  texto: {
    color: 'black',
    padding: '0.5vh',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 30,
    
  }
});