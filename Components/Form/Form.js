import React, {useState} from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'

const Form = (props) => {

    const {
        setText,
        addTodo,
        text,
inputRef
    } = props

    return (
        <View style={styles.form}>
            <TextInput style={styles.inputText} placeholder='Enter the Todo...' onChangeText={(e) => setText(e)} value={text}/>
            <Button style={styles.button} title='Add Todo' onPress={addTodo} />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
      width: '70%',
      marginTop: 50,
    },
    inputText: {
      marginBottom: 15,
      borderBottomColor: '#85CDFD',
      borderBottomWidth: 1,
      height: 40
    },
    button: {
      backgroundColor: '#3C84AB'
    },
  })

export default Form