import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, TextInpu, TextInput } from 'react-native';

export default function App() {

  // Aplicativo com dois estados, um para leitura e outro para atualização 
  // criando constantes mais set.
  const [estado, setarEstado] = useState('leitura'); 
  const [anotacao, setarAnotacao] = useState('')

  function atualizarTexto(){
    setarEstado('leitura')
  
  }

  //condicao do app
  if(estado == 'leitura'){
  return (
    <View style={{flex:1}}>
      <StatusBar style='light'/>
      <View style={styles.header}><Text style={styles.title}>Aplicativo Anotação</Text></View>
      {
        (anotacao != '')?
      <View style={{padding: 20}}><Text style={styles.anotacao}>{anotacao}</Text></View>
      :
      <View style={{padding: 20}}><Text>Nenhuma anotação encontrada!</Text></View>
      }
      <TouchableOpacity onPress={() => setarEstado('atualizando')} 
      style={styles.btnAnotacao}>
      {
      (anotacao =='')?
      <Text style={styles.btnAnotacaoTexto} >+</Text>
      :
      <Text style={{fontSize:20, color:'white', textAlign:'center', marginTop:16}}>Editar</Text>
      }

      </TouchableOpacity>
      
    </View>
  )
  } else if(estado =='atualizando'){
    return (
      <View style={{flex:1}} > 
        <StatusBar style='light'/>
        <View style={styles.header}><Text style={styles.title}>Aplicativo Anotação</Text></View>

        <TextInput onChangeText={(text)=> setarAnotacao(text)} styles={{height:300, textAlignVertical:'top'}} multiline={true} numberOfLines={3} value={anotacao}></TextInput>
        
        <TouchableOpacity onPress={() => atualizarTexto()} style={styles.btnSalvar}><Text style={{textAlign:'center', color:'white'}} >Salvar</Text></TouchableOpacity>
        
      </View>
  
  )}
}

const styles = StyleSheet.create({

  header:{
    width:'100%', 
    height:'13%', 
    padding:10, 
    backgroundColor:'#069',
  }, 
  anotacao:{
    fontSize: 16
  }, 
    btnAnotacao:{
    position:'absolute', 
    right:20, 
    bottom:30, 
    width:50, 
    height: 50,
    backgroundColor:'#069',
    borderRadius:25
  }, 
  btnAnotacaoTexto:{
    color:'white', 
    position:'relative', 
    textAlign: 'center', 
    top: 13, 
    fontSize: 18

  }, 
  btnSalvar:{
    width:100, 
    position:'absolute', 
    right:20, 
    bottom: 25, 
    width: 100, 
    padding: 20, 
    paddingBottom:20,
    backgroundColor:'#069',
  }, 
  title:{
    textAlign:'center', 
    color:'white', 
    fontSize: 30, 
    marginTop: 27}
  }


);