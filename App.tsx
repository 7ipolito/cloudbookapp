import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login';
import { useFonts, RobotoSlab_400Regular,RobotoSlab_500Medium,RobotoSlab_700Bold } from '@expo-google-fonts/roboto-slab';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { Dashboard } from './src/screens/Dashboard';
import { Profile } from './src/screens/Profile';
import { SelectEmoji } from './src/screens/SelectEmoji';
import { AddImage } from './src/screens/AddImage';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
    <>
    <StatusBar 
    barStyle="light-content"
    backgroundColor="transparent"
    translucent
  />
    <ThemeProvider theme={theme}>
      <AddImage/>

    </ThemeProvider>
    </>
  );
}

