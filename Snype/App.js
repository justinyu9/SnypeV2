import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './screens/main';
import Entry from './screens/entry';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Snype"
          component={Entry} />
        <Stack.Screen name="Main"
          component={Main}
          options={{
          headerTitle:"Snype",
          headerLeft: null,
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
