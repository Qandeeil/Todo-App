import React from 'react'
import { StyleSheet, Text, FlatList, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const List = ({todo,setText,setTodo}) => {

    const touchableHandler = (e) => {
        setText(e)
    }

    const reomveItem = (e) => {
        const newTodo = todo.filter(item => item != e);
        setTodo(newTodo)
    }

    return (
        <FlatList 
            style={styles.list}
            data={todo}
            renderItem={items => (
                <TouchableOpacity style={styles.textList} onPress={() => touchableHandler(items.item)}>
                    <Text style={styles.textItem}>{items.item}</Text>
                    <Ionicons name="remove-circle-outline" color="red" size={20} onPress={() => reomveItem(items.item)}/>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    list:{
        marginTop: 20,
        textAlign: 'left',
        width: '70%',
    },
    textList:{
        borderWidth: 2,
        borderColor: '#362FD9',
        padding: 15,
        marginBottom: 15,
        borderRadius: 8,
        borderStyle: 'dotted',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    remove: {
        fontWeight: 'bold',
        color: 'red',
        fontSize: 20,
    },
    textItem: {
        fontWeight: 'bold',
        color: '#3C84AB',
    }
  })

export default List