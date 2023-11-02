import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar
} from 'react-native';

import Router from './src/navigation/Router';

import HomeScreen from './src/screens/Home';
import { ReactNode } from 'react';

const App = (): ReactNode => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Router />
    </>

  );
};


export default App;