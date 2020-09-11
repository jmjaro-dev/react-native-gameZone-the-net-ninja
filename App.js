import React, { useState } from 'react';
import * as Font from 'expo-font'; // Expo Font
// Screens
// import Home from './screens/home';
import { AppLoading } from 'expo'; // AppLoading
import Drawer from './routes/drawer' // Navigator
import { NavigationContainer } from '@react-navigation/native';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
})

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){ 
    return (
      <NavigationContainer>
        <Drawer />
      </NavigationContainer>    
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}