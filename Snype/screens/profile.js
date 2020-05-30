import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Starred() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Starred!</Text>
    </View>
  );
}

function History() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>History!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Profile_Tab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Starred" component={Starred} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
}
