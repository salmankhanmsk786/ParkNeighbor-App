import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestsScreen from "../screens/Guests";

// Removed the duplicate import of HomeTabNavigator
import HomeTabNavigator from "./HomeTabNavigator";
import PostScreen from "../screens/PostScreen";
import ReservationScreen from "../screens/ReservationScreen";
import OrderCompleteScreen from "../screens/OrderCompleteScreen";
import PaymentInfoScreen from "../screens/PaymentInfo";
import MessageScreen from "../screens/MessagingScreen";
import { useUserMode } from './UserModeContext';
import HostTabNavigator from './HostTabNavigator';

const Stack = createStackNavigator();

const Router = (props) => {
  const { isHostMode } = useUserMode(); // Consume the context value

  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home" component={isHostMode ? HostTabNavigator : HomeTabNavigator} options={{ headerShown: false }}
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
        <Stack.Screen
          name={"Payment Info"}
          component={PaymentInfoScreen}
          options={{
            headerShown: false
          }} />
        <Stack.Screen
          name={"Message Screen"}
          component={MessageScreen}
          options={{
            headerShown: false
          }} />
      </Stack.Navigator>
  )
}

export default Router;