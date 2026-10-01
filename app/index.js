import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, ScrollView, Image, TextInput, Pressable, Switch} from 'react-native';
import { useState, useEffect} from 'react';

export default function App() {

const [pressionado, setPressionado] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View>
            <Image style={styles.imagem} source={require('../assets/imagemCard.jpg')}/>
            <Text style={styles.nomeUsuario}>Matheus Almada dos Santos</Text>
          </View>

          <View style={styles.bio}>
            <Text style={{fontSize: 18}}>Bio</Text>
            <TextInput style={styles.input}></TextInput>
          </View>

          <View>
            <Pressable style={styles.botao}>
              <Text style={{color: 'white'}}>Editar Bio</Text>
            </Pressable>
          </View>

          <View>
            <Text style={styles.config}>Configurações</Text>
          </View>
          
          <View style={styles.notificacao}>
            <Text>Receber Notificações</Text>
            <Switch value={pressionado} onValueChange={setPressionado}/>
          </View>

          <View>
            <Pressable style={styles.salvar}>
              <Text style={{color: 'white'}}>Salvar</Text>
            </Pressable>
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
    width: 120,
    height: 120,
  },

  nomeUsuario: {
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 20,
  },

  bio: {
    flex: 2,
    marginStart: 5,
    padding: 10,
  },

  input: {
    marginTop: 5,
    marginEnd: 5,
    height: 250,
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
  },

  botao: {
    marginStart: 15,
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  config: {
    flex: 3,
    marginTop: 15,
    fontSize: 18,
    padding: 10,
  },

  notificacao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 10,
    padding: 10,
  },

  salvar: {
    alignSelf: 'center',
    width: 300,
    height: 50,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  }
});