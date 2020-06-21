import * as React from 'react';
import { View, Text, Button, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Header from "./shared/header";
import EntryNavigator from './routes/entryStack';
import MainNavigator from './routes/mainStack';
import FaqNavigator from './routes/faqStack';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Entry" screenOptions={{ gestureEnabled: false }} drawerPosition="right">
          <Drawer.Screen
            name="Entry"
            component={EntryNavigator}
            options={{
                title: 'Logout',
            }}
             />
          <Drawer.Screen name="Faq" component={FaqNavigator} />
          <Drawer.Screen
            name="Main"
            component={MainNavigator}
            options={{
                drawerLabel: () => null,
                title: null,
                drawerIcon: () => null
            }}
             />
      </Drawer.Navigator>

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
