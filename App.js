import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Logo from './components/logo';
import Card from './components/card';


export default function App() {

  const onPressEditar = () => {
    alert('Botón de editar presionado');
    {/*Obviamente hay que hacer bien esta funcion, esto es solo de prueba*/}
  }

  return (
    <View style={styles.container}>

      <View style={{}}>
        <Logo/>
      </View>
      
      {/*Revisar que cambie el tamaño del logo */}
      <StatusBar style="auto" />

      {/*Llamar a card y boton*/}

      <ScrollView horizontal 
      style={styles.scrollView}
      contentContainerStyle={styles.scrollViewContent}
      showsHorizontalScrollIndicator={false}>
        <View style={styles.cardContainer}>

          <Card
            imagenSource={require('./assets/image/LOGO.png')}
            tamano="Grande"
            stock={10}
            onPressEditar={onPressEditar}
          />

        </View>
        
        <View style={styles.cardContainer}>

          <Card
            imagenSource={require('./assets/image/LOGO.png')}
            tamano="Mediana"
            stock={10}
            onPressEditar={onPressEditar}
          />

        </View>

        <View style={styles.cardContainer}>

          <Card
            imagenSource={require('./assets/image/LOGO.png')}
            tamano="Chica"
            stock={10}
            onPressEditar={onPressEditar}
          />

        </View>
      </ScrollView>
    
    </View>
  );
}

{/*Revisar estilos */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    padding: 30,

  },
  scrollView: {
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  cardContainer: {
    marginRight: 0,
  },

});
