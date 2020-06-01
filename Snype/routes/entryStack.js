import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Entry from '../screens/entry';
import EntryHeader from "../shared/entry_header";

const Stack = createStackNavigator()

export default function EntryNavigator() {
  return (
    <Stack.Navigator initialRouteName='Entry'
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
          name='Entry'
          component={Entry}
          options={({ navigation }) => ({
            headerTitle: () => <EntryHeader navigation={navigation} title='Snype'/>,
          })}
      />
    </Stack.Navigator>
  );
}
