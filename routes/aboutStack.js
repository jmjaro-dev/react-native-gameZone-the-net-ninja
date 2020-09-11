import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import About from '../screens/about';
// Header Component
import Header from '../shared/header'
// useNavigation
import { useNavigation } from '@react-navigation/native';
// headerBackground
import { HeaderBackground } from '../styles/global';

const Stack = createStackNavigator();

export default function AboutStack() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator
      screenOptions= {{
        headerBackground: () => (
          <HeaderBackground />
        ),
        headerStyle: {
          backgroundColor: '#eee'
        },
        headerTintColor: "#444",
        height: 60
      }}
    >
      <Stack.Screen 
        name="About" 
        component={About} 
        options={{
          headerTitle: () => <Header navigation={navigation} title="About GameZone" />
        }} 
      />
    </Stack.Navigator>
  )
};
