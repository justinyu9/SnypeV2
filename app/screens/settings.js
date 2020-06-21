import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function Allergies() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Allergies!</Text>
    </View>
  );
}

function Taste() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Taste!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function Settings_Tab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Allergies" component={Allergies} />
      <Tab.Screen name="Taste" component={Taste} />
    </Tab.Navigator>
  );
}
