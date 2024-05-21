import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import { Button } from '@rneui/themed';

export default function App() {
  const image = "../img/Image-NUBank.jpg"
  const logo = "../img/Nubank_logo_Branco.svg.png"
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.imageBackground} >
          <Image
        source = {{uri:logo}}
        style = {styles.image}
          />
          <Button
              title={'Começar'}
              containerStyle={stylesButton.container}
              buttonStyle={stylesButton.button}
            />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 30, 
    width: 50, 
    resizeMode:'center',
    position: 'absolute',
    top: 20,
    left: 20
  }
});

const stylesButton = StyleSheet.create({
  container: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
    borderRadius: 30
  },
  button: {
    backgroundColor: 'purple'
  },
  title: {

  }
})