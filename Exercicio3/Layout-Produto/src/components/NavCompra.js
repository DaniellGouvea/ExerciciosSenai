import { StyleSheet, Text, View, Image} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Button } from '@rneui/themed';
import { color } from '@rneui/base';

export default function NavCompra() {

    const imgItem = "https://images.crutchfieldonline.com/ImageHandler/trim/750/457/products/2013/1/532/g532BTPHON-o_front.jpeg"

  return (
    <View style={styles.container}>
        <Image
        style={{height: 237 /*750*/ , width:375 /*457*/, borderRadius: 40}}
        source={{
          uri: imgItem
        }}
        />
        <View style={{flexDirection: 'row', gap: 7, marginTop: 10}}>
            <FontAwesome name="circle" size={9} color="lightgrey"/>
            <FontAwesome name="circle" size={10} color="#57CE93" />
            <FontAwesome name="circle" size={9} color="lightgrey" />
            <FontAwesome name="circle" size={9} color="lightgrey" />
            <FontAwesome name="circle" size={9} color="lightgrey" />
        </View>
        
        <Text style={styles.texto}>Harman/Kardon BT</Text>
        <Text style ={{color:"#57CE93", marginTop: 12}}>HEADPHONES <Text style={{color:"black"}}>&amp;</Text> Harman/Kardon </Text>
        <Text style= {styles.texto2}>
          Premium over-ear headphones with our own technology with closed loop and digital noise-canceling technology.
        </Text>
        <Button
              title={'ADD TO CART'}
              containerStyle={stylesButton.container}
              buttonStyle={stylesButton.button}
              titleStyle={stylesButton.title}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    gap: 10,
    marginTop: "10vh"
    
  },
  texto: {
    color: 'black',
    padding: '0.5vh',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontWeight: '600',
    fontSize: 30,
  },
  texto2: {
    color: "grey", 
    textAlign: "center", 
    width: '70vw', 
    marginTop: 5,
    fontSize: 16}
});

const stylesButton = StyleSheet.create({
  container: {
    width: '70vw',
    marginHorizontal: 50,
    marginVertical: 10,
    marginTop: 30,
    height:70
  }, 
  button: {
    backgroundColor: '#57CE93',
    borderRadius: 50,
    
  },
  title: {
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  }
})