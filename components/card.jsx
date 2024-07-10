import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Card = ({ imagenSource, tamano, stock, onPressEditar }) => {
  return (
    <View style={styles.card}>

      <Image source={imagenSource} style={styles.imagen} />


      <View style={styles.textoContainer}>
        <Text style={styles.titulo}>Caja {tamano}</Text>
        
        <Text style={styles.subtitulo}>Stock: {stock}</Text>
      </View>

      
      <TouchableOpacity style={styles.editarContainer} onPress={onPressEditar}>
        <Text style={styles.editarIcon}>✎</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "90%",
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 40,
    paddingLeft: 13,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: "5%", height: "5%" },
    elevation: 2,
  },
  imagen: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 8,
  },
  textoContainer: {
    flex: 1,
    marginLeft: 25,
    marginEnd: 30,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 15,
    color: '#777',
    marginTop: 6,
  },
  editarContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#3498db',
    padding: 6,
    borderRadius: 20,
  },
  editarIcon: {
    color: '#fff',
    fontSize: 20,
  },
});

export default Card;
