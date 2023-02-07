import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
        <Text style={styles.textHeader}>My Todos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    contenter: {
        backgroundColor: '#DEFCF9',
        width: '100%',
        height: '100%',
      },
      header: {
        backgroundColor: '#362FD9',
        marginTop: 24,
        height: 55,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
      }
})

export default Header