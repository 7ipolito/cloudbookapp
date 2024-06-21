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
    FooterWrapper
} from './styles';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import { useNavigation } from '@react-navigation/native';
import { Alert, PermissionsAndroid } from 'react-native';

type NavigationProps = {
    navigate: (screen: string) => void;
};

interface ReadDirItem {
    ctime: Date | undefined; // The creation date of the file (iOS only)
    mtime: Date | undefined; // The last modified date of the file
    name: string; // The name of the item
    path: string; // The absolute path to the item
    size: string; // Size in bytes
    isFile: () => boolean; // Is the file just a file?
    isDirectory: () => boolean; // Is the file a directory?
}

export function SignIn() {
    const navigation = useNavigation<NavigationProps>();

    function handleStart() {
        navigation.navigate('Dashboard');
    }

    async function createFolderMain() {
        // const exists = await FS.exists(cloudbookPath);
        // if (!exists){
        //   await FS.mkdir(cloudbookPath).then(async r=>{
        //         createFolderImages();
        //   }).catch(err=>{
        //       console.log(err)
        //       return Alert.alert("Erro ao criar pasta")
        //   })
        // }
    }

    // async function createFolderImages(){
    //     await FS.mkdir(imagesPath).then(r=>{
    //         createFolderRepositoriesImages();

    //     }).catch(err=>{
    //         console.log(err)
    //         return Alert.alert("Erro ao criar pasta")

    //     })
    // }

    // async function createFolderRepositoriesImages(){
    //     await FS.mkdir(repositoriesImagesPath).then(r=>{
    //         createFolderSubjectsImages();
    //     }).catch(err=>{
    //         console.log(err)
    //         return Alert.alert("Erro ao criar pasta")

    //     })
    // }

    // async function createFolderSubjectsImages(){
    //     await FS.mkdir(subjectsImagesPath).then(r=>{

    //     }).catch(err=>{
    //         console.log(err)
    //         return Alert.alert("Erro ao criar pasta")

    //     })
    // }

    return (
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoIcon  />

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
                        onPress={handleStart}
                    />
                </FooterWrapper>
            </Footer>
        </Container>
    );
}
