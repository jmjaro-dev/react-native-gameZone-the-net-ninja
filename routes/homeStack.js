import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// screens
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
// Header Component
import Header from '../shared/header'
// useNavigation
import { useNavigation } from '@react-navigation/native';
// headerBackground
import { HeaderBackground } from '../styles/global';

const Stack = createStackNavigator();

export default function HomeStack() {
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
        name="Home" 
        component={Home} 
        options={{
          headerTitle: () => <Header navigation={navigation} title="GameZone" />
        }} 
      />
      <Stack.Screen 
        name="ReviewDetails" 
        component={ReviewDetails}
      />
    </Stack.Navigator>
  )
};