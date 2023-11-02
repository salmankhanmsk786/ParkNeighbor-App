import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar

} from 'react-native';

import HomeScreen from './src/screens/Home';
import SearchResultsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestsScreen from './src/screens/Guests';
import Post from './src/components/Post'; //Import component post - aa

import { ReactNode } from 'react';
import feed from './assets/data/feed'; //Import dummy data -aa

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

const App = (): ReactNode => {

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        {/* <HomeScreen /> */}

        {/* <Post post={post1}/>
        <Post post={post2}/>
        <Post post={post3}/> */}

        {/* <SearchResultsScreen /> */}
        
        {/* <DestinationSearchScreen /> */}

        <GuestsScreen />
        
      </SafeAreaView>
    </>

  );
};


export default App;