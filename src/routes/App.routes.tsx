import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../screens/Dashboard';
import { AddImage } from '../screens/Shortcurts/AddImage';
import { useTheme } from 'styled-components';
import { Profile } from '../screens/Profile';
import { AddAnottation } from '../screens/Shortcurts/AddAnnotation';
import { AddRepository } from '../screens/AddRepository';
import { Subjects } from '../screens/Subjects';
import { AddSubject } from '../screens/AddSubject';
import { Contents } from '../screens/Contents';
import { SignIn } from '../screens/SignIn';
import { AddImageInContent } from '../screens/AddImageInContent';
import { AddAnnotationInContent } from '../screens/AddAnnotationInContent';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                orientation: 'portrait'
            }}
        >
            <Screen name="SignIn" component={SignIn} />

            <Screen name="Dashboard" component={Dashboard} />

            <Screen name="Subjects" component={Subjects} />

            <Screen name="Contents" component={Contents} />

            <Screen name="Profile" component={Profile} />

            <Screen name="AddImage" component={AddImage} />

            <Screen name="AddImageInContent" component={AddImageInContent} />

            <Screen name="AddRepository" component={AddRepository} />

            <Screen name="AddSubject" component={AddSubject} />

            <Screen name="AddAnnotation" component={AddAnottation} />

            <Screen
                name="AddAnnotationInContent"
                component={AddAnnotationInContent}
            />
        </Navigator>
    );
}
