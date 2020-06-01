import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SimpleLineIcons, Octicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Swipe_Page from './swipe';
import Profile_Tab from './profile';
import Settings_Tab from './settings';

  const Tab = createMaterialBottomTabNavigator();

  const Drawer = createDrawerNavigator();

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
          name="Swipe_Page"
          component={Swipe_Page}
          options={{
            tabBarLabel: 'Search',
            tabBarIcon: ({ color }) => (
              <Octicons name="search" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile_Tab"
          component={Profile_Tab}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings_Tab"
          component={Settings_Tab}
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
      <Drawer.Navigator initialRouteName="Main">
          <Drawer.Screen name="Main" component={Main} />
      </Drawer.Navigator>
    );
  }
