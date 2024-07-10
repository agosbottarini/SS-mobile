import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './components/logo';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{display: "flex", justifyContent: "flex-start"}}><Logo/></View>
      {/*Revisar que cambie el tamaño del logo */}
      <StatusBar style="auto" />
      {/*Llamar a card y boton*/}
    </View>
  );
}

{/*Revisar estilos */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
