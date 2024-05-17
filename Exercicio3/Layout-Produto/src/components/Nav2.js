import { StyleSheet, Text, View } from 'react-native';

export default function Nav2() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>
        PRICE FOR EACH
      </Text>
      <Text style={styles.texto}>
          $249.99
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#57CE93',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  texto: {
    color: 'white',
    padding: '0.5vh',
    alignSelf: 'center',
    // fontFamily: 'Roboto',
    fontWeight: '500',
    fontSize: 16,
    
  }
});