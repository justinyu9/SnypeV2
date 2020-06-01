import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from "../shared/header";
import Main from '../screens/main';

const Stack = createStackNavigator()

export default function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName='Main'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      >
        <Stack.Screen
            name='Main'
            component={Main}
            options={({ navigation }) => ({
              headerTitle: () => <Header navigation={navigation} title='Snype'/>,
              headerLeft: false,
            })}
        />
      </Stack.Navigator>
  );
}
