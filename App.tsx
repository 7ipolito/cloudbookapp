import { StatusBar } from 'react-native';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/en';
import { StyleSheet, Text, View } from 'react-native';
import {
    useFonts,
    RobotoSlab_400Regular,
    RobotoSlab_500Medium,
    RobotoSlab_700Bold
} from '@expo-google-fonts/roboto-slab';
import { Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { AppRoutes } from './src/routes/App.routes';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native';
import { AuthProvider } from './src/hooks/useAuth';
export default function App() {
    let [fontsLoaded] = useFonts({
        RobotoSlab_400Regular,
        RobotoSlab_500Medium,
        RobotoSlab_700Bold,
        Rajdhani_700Bold
    });

    if (!fontsLoaded) {
        return <></>;
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
                <GestureHandlerRootView style={styles.container}>
                    <SafeAreaView style={styles.container}>
                        <AuthProvider>
                             <AppRoutes />
                        </AuthProvider>
                    </SafeAreaView>
                </GestureHandlerRootView>
                </NavigationContainer>
            </ThemeProvider>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
  });