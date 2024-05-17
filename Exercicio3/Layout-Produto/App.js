import { StyleSheet, View } from 'react-native';
import  Nav  from './src/components/Nav';
import Nav2 from './src/components/Nav2';
import NavCompra from './src/components/NavCompra'

export default function App() {
  return (
    <View style={styles.container}>
      <Nav/>
      <Nav2/>
      <NavCompra />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});



