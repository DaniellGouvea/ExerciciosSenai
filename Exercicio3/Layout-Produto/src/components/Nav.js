import { StyleSheet, Text, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';

export default function Nav() {
  return (
    <View style={styles.container}>
      <Entypo name="menu" size={24} color="white" />
      <Text style={styles.texto}>BOB<Text style ={{color:'#57CE93'}}>STUDIO</Text></Text>
      <FontAwesome name="search" size={20} color="white" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  texto: {
    color: 'white',
    padding: '1vh',
    alignSelf: 'center',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 23
  }
});