import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
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
import { useAuth } from '../hooks/useAuth';

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                orientation: 'portrait'
            }}
        >
            <Screen name="SignIn" component={SignIn} />
        </Navigator>
    );
}
