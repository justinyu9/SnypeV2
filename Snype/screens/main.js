import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';

  function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Implement Swiping here!</Text>
      </View>
    );
  }

  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Show user preferences here</Text>
      </View>
    );
  }

  function Notifications() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Show allergies and preferences here</Text>
      </View>
    );
  }

  const Tab = createMaterialBottomTabNavigator();

  function Main() {
    return (
      <Tab.Navigator
        initialRouteName="Feed"
        activeColor="white"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'black' }}
        barStyle={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <Octicons name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Settings',
            tabBarIcon: ({ color }) => (
              <SimpleLineIcons name="settings" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  export default function TabScreen() {
    return (
        <Main />
    );
  }
