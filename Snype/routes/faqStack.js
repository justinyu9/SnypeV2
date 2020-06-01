import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Header from "../shared/header";
import Faq from '../screens/faq';

const Stack = createStackNavigator()

export default function FaqNavigator() {
  return (
    <Stack.Navigator initialRouteName='Faq'
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
            name='Faq'
            component={Faq}
            options={({ navigation }) => ({
              headerTitle: () => <Header navigation={navigation} title='Snype'/>,
              headerLeft: false,
            })}
        />
      </Stack.Navigator>
  );
}
