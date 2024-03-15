import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import { UserModeProvider } from './src/navigation/UserModeContext';
import Router from './src/navigation/Router';

const App = () => {
  return (
    <UserModeProvider>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <Router />
      </NavigationContainer>
    </UserModeProvider>
  );
};

export default App;
