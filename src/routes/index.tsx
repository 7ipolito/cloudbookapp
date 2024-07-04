import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './App.routes';
import { useAuth } from '../hooks/useAuth';
import { ActivityIndicator, View } from 'react-native';
import { AuthRoutes } from './auth.routes';
export function Routes() {
    const { user } = useAuth();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Verifica se userId está disponível

        console.log(user);
        if (user?.id !== null) {
            setIsLoading(false);
        } else if (user?.id == null) {
            setIsLoading(false);
        }
    }, [user]);

    if (isLoading) {
        // Enquanto estiver carregando, exibe um indicador de atividade
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#222222'
                }}
            >
                <ActivityIndicator size="large" color="yellow" />
            </View>
        );
    }

    return (
        <NavigationContainer>
            {user?.id ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    );
}
