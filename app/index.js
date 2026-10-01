import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet, View, Text, ScrollView, Image, TextInput, TouchableOpacity, Switch, Modal, Alert} from 'react-native';
import { useState, useEffect} from 'react';

export default function App() {

const [modalAberto, setModalAberto] = useState(false);
const [bioModal, setBioModal] = useState('');
const [bioEscrevendo, setBioEscrevendo] = useState('');
const [switchPressionado, setSwitchPressionado] = useState(false);

const modalAtivo = () => {
  setBioEscrevendo(bioModal);
  setModalAberto(true);
}

const salvarModal = () => {
  setBioModal(bioEscrevendo);
  setModalAberto(false);
}

useEffect (() => {
  let tempo;
  if (switchPressionado) {
    tempo = setInterval(() => {
      const alertaTela = 'Olhe para trás';

      Alert.alert('Notificação', alertaTela);
    }, 5000);
  } else {
    clearInterval(tempo);
  }
  return () => clearInterval(tempo);
}, [switchPressionado]);


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
            <View style={styles.areaInput}>
              <Text>{bioModal}</Text>
            </View>
          </View>

          <View>
            <TouchableOpacity style={styles.botao} onPress={modalAtivo}>
              <Text style={{color: 'white'}}>Editar Bio</Text>
            </TouchableOpacity>
            <Modal animationType="fade" transparent={true} visible={modalAberto}>
              <View style={styles.areaModal}>
                <View style={{alignItems: 'left'}}>
                  <Text>Editar Bio:</Text>
                  <TextInput style={styles.input} value={bioEscrevendo} onChangeText={setBioEscrevendo}/>
                </View>

                <View>
                  <TouchableOpacity style={styles.botoesModal} onPress={ () => setModalAberto(false)}>
                    <Text>Cancelar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.botoesModal} onPress={salvarModal}>
                    <Text>Salvar</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>
          </View>

          <View>
            <Text style={styles.config}>Configurações</Text>
          </View>
          
          <View style={styles.notificacao}>
            <Text>Receber Notificações</Text>
            <Switch value={switchPressionado} onValueChange={setSwitchPressionado}/>
          </View>

          <View>
            <TouchableOpacity style={styles.salvar} onPress={() => Alert.alert('Aviso', 'Dados salvos com sucesso !!')}>
              <Text style={{color: 'white'}}>Salvar</Text>
            </TouchableOpacity>
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

  areaInput: {
    height: 250,
    width: '100%',
    borderWidth: 1,
    borderRadius: 3,
    padding: 8,
  },

  areaModal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
  },

  botoesModal: {
    marginStart: 15,
    marginTop: 10,
    width: 100,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  input: {
    marginTop: 5,
    marginEnd: 5,
    height: 250,
    width: 300,
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: 'top',
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