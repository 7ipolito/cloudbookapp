import { StatusBar } from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en'
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { useFonts, RobotoSlab_400Regular,RobotoSlab_500Medium,RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import { Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { Dashboard } from './src/screens/Dashboard';
import { Profile } from './src/screens/Profile';
import { SelectEmoji } from './src/screens/SelectEmoji';
import { AddImage } from './src/screens/Shortcurts/AddImage';
import { AppRoutes } from './src/routes/App.routes';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn } from './src/screens/SignIn';
import { PathProvider } from './src/hooks/usePath';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold,
    Rajdhani_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
    <StatusBar 
    barStyle="light-content"
    backgroundColor="#222222"
    translucent
    
  />
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <PathProvider>
          <AppRoutes/>
        </PathProvider>
      </NavigationContainer>

    </ThemeProvider>
    </>
  );
}

