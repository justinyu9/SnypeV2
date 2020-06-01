import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, ImageBackground } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function EntryHeader({navigation, title}) {

    return (
        <ImageBackground
            style={styles.header}
            >
            <View style={styles.headerTitle}>
                <Text style = {styles.headerText}>
                    {title}
                </Text>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        height: '125%',
        marginTop:-15,
        marginLeft:'40%',
        flexDirection: 'row',
        flex:1,
        alignItems: 'center',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 20,
      color: 'white',
      marginTop:15,
      letterSpacing: 1,
      height: '100%',
      alignItems:"center",
    },
    headerTitle: {
        flexDirection:'row'
    }
  });
