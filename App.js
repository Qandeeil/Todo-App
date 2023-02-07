import React, {useState} from 'react'
import { StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native'
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import List from './Components/List/List';

const App = () => {

  const [text,setText] = useState('');
  const [todo,setTodo] = useState([]);

  const addTodo = () => {
    if(text.length > 3){
      setTodo([...todo,text])
    }else{
      Alert.alert('OOPS!!', 'Todos most be over 3 char', [
        {text: 'Exit'}
      ])
    }
  }
  
  return (
    <TouchableWithoutFeedback onPress={
      () => {Keyboard.dismiss()}
    }>
      <View style={styles.contener}>
        <Header />
        <View style={styles.content}>
          <Form 
            setText = {setText}
            addTodo = {addTodo}
            text = {text}
          />
          <List 
            todo = {todo}
            setText = {setText}
            setTodo = {setTodo}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  contener: {
    flex: 1,
    backgroundColor: '#DEFCF9',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
})

export default App