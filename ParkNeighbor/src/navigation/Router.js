import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";

import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";
import ReservationScreen from "../screens/ReservationScreen";
import OrderCompleteScreen from "../screens/OrderCompleteScreen";

const Stack = createStackNavigator();

const Router = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            headerShown: false
          }}
        />

        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "Search your destination"
          }}
        />

        <Stack.Screen
          name={"Guests"}
          component={GuestsScreen}
          options={{
            title: "Choose filters needed"
          }}
        />
        <Stack.Screen
          name={"Post"}
          component={PostScreen}
          options={{
            title: "Parking Spot"
          }}
        />
        <Stack.Screen
          name={"Reservation"}
          component={ReservationScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name={"Order Complete"}
          component={OrderCompleteScreen}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;