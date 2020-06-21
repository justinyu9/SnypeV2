import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function StarButton( { text, onPress } ){
  const [star, setStar] = useState('star-outlined');

  const star_item = () => {
    console.log('Star button is clicked: ', star);
    if (star == 'star'){
      setStar('star-outlined');
    }
    else {
      setStar('star');
    }
  }
  return(
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
      <Entypo
              name={star}
              color='yellow'
              size={50}
              onPress = {()=>star_item()}
              style={{...styles.modalToggle, ...styles.modalClose}}
            />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    button:{
      left: '80%',
      right: 0,
      top: 0,
      bottom: 0,
      width: '20%',
      borderRadius: 8,
      paddingVertical: 14,
      marginBottom: 20,
      paddingHorizontal: 10,
      backgroundColor: 'rgba(52, 52, 52, 0.5)',
      color: 'white',
    },
    buttonText:{
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16,
      textAlign: 'center',
    }
  });
