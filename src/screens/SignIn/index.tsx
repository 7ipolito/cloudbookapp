import React from 'react';
import {LogoIcon} from '../../assets/icons/Logo';

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
import {useAuth} from '../../hooks/useAuth';

type NavigationProps = {
    navigate: (screen: string) => void;
};





export function SignIn() {
    const {user,login}=useAuth()
    const navigation = useNavigation<NavigationProps>();

    function handleStart() {
        navigation.navigate('Dashboard');
    }

    async function handleCreateAccount(){
        const response= await api.post("/users", {
            name:"User",
            emoji:7
          });
    
          console.log(response.data)
          login(response.data)
          handleStart()
          
    }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoContainer>
                        <LogoIcon  />
                    </LogoContainer>

                    <Title>
                    Organize your studies{'\n'}
                    so 
                    simple and beautiful!
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
                        onPress={handleCreateAccount}
                    />
                </FooterWrapper>
            </Footer>
        </Container>
    );
}
