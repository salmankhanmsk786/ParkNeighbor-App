/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar
  
} from 'react-native';

import HomeScreen from './src/screens/Home';

import { ReactNode } from 'react';

const App = (): ReactNode => {

  return (
    <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <HomeScreen />


      
    </SafeAreaView>
    </>

  );
};


export default App;
