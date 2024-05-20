import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, View, FlatList, Text, Image } from 'react-native';

const lista = [
  {id: "1", nome: "Nivaldo", email: "nivaldo@gmail.com"},
  {id: "2", nome: "Gabriel", email: "gabriel@hotmail.com"},
  {id: "3", nome: "Nathália", email: "nathalia@yahoo.com"},
  {id: "4", nome: "Rebeca", email: "rebeca@gmail.com"},

]

export default function App() {
  return (
    <View style={styles.container} >
      <ScrollView showsVerticalScrollIndicator={false}> 
      <Text style={styles.containerPessoa}>
        Menu
      </Text>
      <Image 
      source ={{uri: "https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png"}}
      style = {styles.img}
      />
      <Image 
      source ={{uri: "https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png"}}
      style = {styles.img}
      />
      <Image 
      source ={{uri: "https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png"}}
      style = {styles.img}
      />
      <Image 
      source ={{uri: "https://sm.ign.com/ign_br/screenshot/default/link_t3cf.png"}}
      style = {styles.img}
      />
       </ScrollView>
    </View>
  );
}

function Pessoa({data}) {
  return(
    <View style={styles.containerPessoa}>
      <Text style={styles.textoPessoa}>id: {data.id}</Text>
      <Text style={styles.textoPessoa}>Nome: {data.nome}</Text>
      <Text style={styles.textoPessoa}>Email: {data.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  containerPessoa: {
    backgroundColor: '#222',
    height: 100,
    width: '100vw',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 25,
    fontSize: 30
  },
  textoPessoa: {
    color: 'white',
    fontSize: 26
  },
  img: {
    height: 250, 
    width: 250,
    resizeMode: 'cover',
    border: '1px solid black',
    backgroundColor: 'red',
    alignSelf: 'center'
  } 

});
