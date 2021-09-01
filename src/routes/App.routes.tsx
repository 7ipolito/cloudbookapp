import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../screens/Dashboard';
import { AddImage } from '../screens/AddImage';
import { useTheme } from 'styled-components';
import { Profile } from '../screens/Profile';
import { AddAnottation } from '../screens/AddAnnotation';
import { AddRepository } from '../screens/AddRepository';

const {Navigator, Screen}= createNativeStackNavigator();

export function AppRoutes(){
    const theme = useTheme();
    return(
        <Navigator
        
        screenOptions={{
            headerShown: false,
          
          }}
        >
            <Screen
                name='Dashboard'
                component={Dashboard}
            />

            <Screen 
                name='Profile'
                component={Profile}
            />

            <Screen
                name='AddImage'
                component={AddImage}
            />

            <Screen
                name='AddRepository'
                component={AddRepository}
            />


            <Screen
                name='AddAnnotation'
                component={AddAnottation}
            />

          
        </Navigator>
    )
}