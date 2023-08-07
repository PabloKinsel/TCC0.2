import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.Image}
        source={require('./assets/Logo.png')}
      />    
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Vendas')}
      >
        <Text style={styles.buttonText}>Vendas</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Produtos')}
      >
        <Text style={styles.buttonText}>Produtos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Relatorios')}
      >
        <Text style={styles.buttonText}>Relatórios</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ADBEDE',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: 200,
    marginVertical: 5,
    backgroundColor: '#E9FFC0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#EA666B',
    fontSize: 16,
    textAlign: 'center',
  },
  Image:{
    marginTop:-250,
    marginVertical: 5,
    backgroundColor:'#000',
    borderRadius:5
    
    
  }
});

export default HomeScreen;