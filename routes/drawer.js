import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
// Stacks
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const RootDrawerNavigator = createDrawerNavigator();

export default function Drawer() {
  return (
    <RootDrawerNavigator.Navigator>
      <RootDrawerNavigator.Screen name="Home" component={HomeStack} />
      <RootDrawerNavigator.Screen name="About" component={AboutStack} />
    </RootDrawerNavigator.Navigator>
  )
}