// src/navigation/MainNavigator.js
import React from 'react';
import { useUserMode } from '../contexts/UserModeContext';
import HomeTabNavigator from './HomeTabNavigator';
import HostTabNavigator from './HostTabNavigator';

const MainNavigator = () => {
  const { isHostMode } = useUserMode();

  return isHostMode ? <HostTabNavigator /> : <HomeTabNavigator />;
};

export default MainNavigator;