// src/navigation/HostTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HostDashboardScreen from '../screens/HostDashboard/HostDashboardScreen';
import ProfileScreen from "../screens/ProfileScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ListingScreen from "../screens/ListingScreen";
import InboxScreen from "../screens/InboxScreen";
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const HostTab = createBottomTabNavigator();

const HostTabNavigator = () => {
  return (
    <HostTab.Navigator>
      <HostTab.Screen 
        name="Dashboard" 
        component={HostDashboardScreen} 
        />
      <HostTab.Screen
        name={'Calendar'}
        component={CalendarScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
      <HostTab.Screen
        name={'Listing'}
        component={ListingScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
      <HostTab.Screen
        name={'Inbox'}
        component={InboxScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
      <HostTab.Screen
        name={'Profile'}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </HostTab.Navigator>
  );
};

export default HostTabNavigator;
