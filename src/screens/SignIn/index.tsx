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
            name:"Allan Hipolito",
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
                        Organize seus estudos{'\n'}
                        de forma {'\n'}
                        simples e linda!
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Inicie a imersão{'\n'}
                    clicando no botão abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>
                    <SignInSocialButton
                        title="Iniciar imersão"
                        onPress={handleCreateAccount}
                    />
                </FooterWrapper>
            </Footer>
        </Container>
    );
}
