import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './screens/main';
import Entry from './screens/entry';
import Profile_Tab from './screens/profile';
import {MaterialIcons} from '@expo/vector-icons';

const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Snype"
          component={Entry} />
        <Stack.Screen name="Main"
          component={Main}
          options={({ navigation }) => ({
            title: 'Snype',
            headerLeft: false,
            headerRight: () =>
                <MaterialIcons name="menu" size={28} onPress={() => navigation.openDrawer()} style={styles.icon}/>,
            headerLeftContainerStyle: { paddingLeft: 10 } })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
    icon: {
      position: 'relative',
      flexDirection:'column',
      flex:0.5,
      marginTop:5,
    },
  });
