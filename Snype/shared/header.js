import React from 'react'
import { View, StyleSheet, Text, Dimensions, Image, ImageBackground } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

export default function Header({navigation, title}) {
    const openMenu =()=>{
        navigation.openDrawer();
    }

    return (
        <ImageBackground
            style={styles.header}
            >
            <View style={styles.headerTitle}>
                <Text style = {styles.headerText}>
                    {title}
                </Text>
            </View>
            <MaterialIcons name="menu" size={28} onPress={openMenu}  style={styles.icon} color='white'/>
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
    icon: {
      position: 'relative',
      flexDirection:'column',
      flex:0.5,
      marginTop:15,
      marginLeft:'35%',
    },
    headerTitle: {
        flexDirection:'row'
    }
  });
