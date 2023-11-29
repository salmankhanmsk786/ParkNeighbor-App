import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/SearchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {
  return (
    <Tab.Navigator screenOptions={{
        "tabBarTintColor": '#f15454',
        "tabBarIndicatorStyle": {
          "backgroundColor": '#f15454',
      }
    }}>
      <Tab.Screen name={"list"} component={SearchResults} />
      <Tab.Screen name={"map"} component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigator;