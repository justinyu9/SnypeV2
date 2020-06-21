import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function LoginButton( { text, onPress } ){
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
      borderRadius: 8,
      paddingVertical: 14,
      marginBottom: 20,
      paddingHorizontal: 10,
      backgroundColor: 'black',
      color: 'white',
    },
    buttonText:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    }
  });
