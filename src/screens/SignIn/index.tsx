import React, { useEffect, useState } from 'react';
import { LogoIcon } from '../../assets/icons/Logo';
import * as Linking from 'expo-linking';

import { RFValue } from 'react-native-responsive-fontsize';
import {
    Container,
    Header,
    TitleWrapper,
    Title,
    SignInTitle,
    Footer,
    FooterWrapper,
    LogoContainer
} from './styles';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useNavigation } from '@react-navigation/native';
import { api } from '../../api/axios';
import { useAuth } from '../../hooks/useAuth';
import * as WebBrowser from 'expo-web-browser';

type NavigationProps = {
    navigate: (screen: string) => void;
};

export function SignIn() {
    const handleDeepLink = async (event: event) => {
        const data: any = Linking.parse(event.url);
        const response = await api.post('/auth/login/google', {
            accessToken: data.queryParams.access_token,
            email: data.queryParams.email
        });

        WebBrowser.dismissBrowser();

        login(response.data);

        // login(response.data);
    };

    useEffect(() => {
        const subscription = Linking.addEventListener('url', handleDeepLink);

        return () => {
            subscription.remove();
        };
    }, []);

    const { user, login } = useAuth();
    const navigation = useNavigation<NavigationProps>();

    const handlePressButtonAsync = async () => {
        await WebBrowser.openBrowserAsync('http://localhost:3000/auth/google');
    };

    function handleStart() {
        navigation.navigate('Dashboard');
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoContainer>
                        <LogoIcon />
                    </LogoContainer>

                    <Title>
                        Organize your studies{'\n'}
                        so simple and beautiful!
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Start the immersion{'\n'}
                    clicking the button below
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton
                        title="Start immersion"
                        onPress={handlePressButtonAsync}
                    />
                </FooterWrapper>
            </Footer>
        </Container>
    );
}
