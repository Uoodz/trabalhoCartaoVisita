import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, ScrollView, Image} from 'react-native';
import { useState, useEffect} from 'react';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image style={styles.imagem} source={require('../assets/imagemCard.jpg')}/>
            <Text style={styles.nomeUsuario}>Matheus Almada dos Santos</Text>
          </View>
          <View style={styles.bio}>
            <Text>Bio</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  imagem: {
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 100,
    width: 200,
    height: 200,
  },

  nomeUsuario: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 15,
  },

  bio: {
    flex: 2,
  },
});