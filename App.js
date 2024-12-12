import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, Button, TouchableHighlight, StyleSheet, Text, TextInput, View } from 'react-native';
import CoolButton from './CoolButton';


export default function App() {
  const [text, setText] = useState()
  const [name, setName] = useState('névtelen')

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/oroszlan.jpg')}
        style={{width: 200, height: 200}}
      />

      <Text>Bekérés</Text>

      <TextInput 
        style={styles.input}
        onChangeText={text => setText(text)}
      /> 

      <Text>{text}</Text>  

      <Text>Jelszó</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
      />      

      <Button 
      title='Katt ide' 
      onPress={() => alert('működik')}      
      />

      <TouchableHighlight 
      style={styles.button}
      onPress={() => alert('ez is működik')}>
          <Text style={styles.buttonText}>Mehet</Text>
      </TouchableHighlight>

      <CoolButton
      title='Gáti István' 
      onPress={() => setName('István')}
      />

      <Text>{name}</Text>


      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'blue',
    borderWidth: 1,
    width: '80%',
    height: 30,
    backgroundColor: 'lightblue',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    marginTop: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    paddingLeft: 10,
    paddingRight: 10,
  },  
});
