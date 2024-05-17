import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View >
      <View style={styles.container1}>

        <View>
          <Image
          source={{uri: 'https://fyre.cdn.sewest.net/ffvii-hub/656a7b5c98774a5fd6a03324/tifa-headshot-xaaqZRyR2.png'}}
          style={styles.img}
          />
        </View>
        <View>
          <Image
          source={{uri: 'https://fyre.cdn.sewest.net/ffvii-hub/656a78e6aed7bb35a2d07612/cloud-headshot-B8oskU3Wa.png'}}
          style={styles.img}
          />
        </View>
        <View>
          <Image
          source={{uri: 'https://fyre.cdn.sewest.net/ffvii-hub/656a7a9c98774a5fd6a02e9f/barett-headshot-12HJiq9QF.png'}}
          style={styles.img}
          />
        </View>

      </View>

      <View style ={styles.container2}>
        <Image
        source={{uri: 'https://fyre.cdn.sewest.net/ffvii-hub/656a7be9aed7bb35a2d07c8e/aerith-headshot-tu-jbMW8p.png'}}
        style={styles.bigImg}
        />
      </View>

      <View style ={styles.container3}>
        <TextInput 
          style= {styles.input}
          />
        <TextInput 
        style= {styles.input}
        />
        <Button 
        title={'Entrar'}
        color={'red'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap:44,
    marginTop:10
  },
  container2: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop:20,
  },
  container3: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 100
  },
  img:{
    width: 100, 
    height: 100, 
    resizeMode:'center',
    border: '1px solid black'
    
  },
  bigImg:{
    height:300, 
    width:300,
    resizeMode:'center',
    border: '1px solid black'
  },
  input:{
    backgroundColor:'black',
    border:'2px solid red',
    height: 40,
    width: '60vw',
    margin: 10
  },
});
