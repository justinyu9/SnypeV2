import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { SimpleLineIcons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Swipe_Page from './swipe';

  function Search() {
    return (
      <View style={{ flex: 1}}>
        <Swipe_Page/>
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

  function Settings() {
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
        initialRouteName="Search"
        activeColor="white"
        labelStyle={{ fontSize: 12 }}
        style={{ backgroundColor: 'black' }}
        barStyle={{ backgroundColor: 'black' }}
      >
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <Octicons name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
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
