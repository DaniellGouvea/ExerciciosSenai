import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';

export default function App() {

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  const [resultado, setResultado] = useState('');

  const urlImage = "https://superafarma.com.br/wp-content/uploads/2022/12/Supera-Farma-Tabela-IMC-Classificacao.png"

  function calcular() {
    if(peso.trim() === '' || altura.trim() === '') {
      alert("Preencha todos os campos antes de calcular.");
      return;
    }


    if(isNaN(peso) || isNaN(altura)) {
      alert("Insira um valor válido nos campos.")
      return
    }

    const valorCalculado = peso / Math.pow(altura, 2);
    setResultado(`Seu IMC é igual a: ${valorCalculado.toFixed(1)}`);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule o seu IMC</Text>
      <TextInput 
        style={styles.input} 
        placeholder='Digite o seu peso (kg)'
        onChangeText={(valor) => setPeso(valor)}
      />
      <TextInput 
        style={styles.input} 
        placeholder='Digite a sua altura (m)'
        onChangeText={(valor) => setAltura(valor)}
      /> 
      <Button 
      title='Calcular' 
      onPress={calcular}
      color = '#96C3C3'
      />
      <Text style={styles.resultado}>{resultado}</Text>

      <Image
        source={{uri:urlImage}}
        style={styles.imagem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#BCEEEE',
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
  titulo: {
    marginVertical:30,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  input: {
    height: 45,
    borderWidth:1,
    borderColor: '#86ACAC',
    margin: 10,
    fontSize: 20,
    padding:10,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'grey'
  },
  imagem: {
    marginTop: 30,
    alignSelf: 'center',
    width:300,
    height: 275,
    resizeMode: 'contain',
    border: 'solid 1px #86ACAC',
    resizeMode: 'center',
    borderRadius: '5%'
  },
  resultado: {
    fontSize:20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
