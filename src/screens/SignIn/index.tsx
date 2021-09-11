import React,{useContext,useState,useEffect} from 'react';
import LogoSvg from '../../assets/logo.svg';
import AppleSvg from '../../assets/apple.svg';
import RocketSvg from '../../assets/rocket.svg';



import { RFValue } from 'react-native-responsive-fontsize';
import { Container,
        Header,
        TitleWrapper,
        Title,
        SignInTitle,
        Footer,
        FooterWrapper } from './styles';
import { SignInSocialButton } from '../../components/SignInSocialButton';
import * as FileSystem from 'expo-file-system';

import { StorageAccessFramework,  } from 'expo-file-system';

import * as FS from 'react-native-fs';
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Alert } from 'react-native';
import { cloudbookPath } from '../../utils/options';


type NavigationProps = {
    navigate:(screen:string) => void;
 }

 interface ReadDirItem{
    ctime: Date | undefined;     // The creation date of the file (iOS only)
    mtime: Date | undefined;     // The last modified date of the file
    name: string;     // The name of the item
    path: string;     // The absolute path to the item
    size: string;     // Size in bytes
    isFile: () => boolean;        // Is the file just a file?
    isDirectory: () => boolean;   // Is the file a directory?
  };

export function SignIn({}){
    
    const navigation = useNavigation<NavigationProps>()
        


    function handleStart(){
        createFolderMain();
    }

    async function createFolderMain(){
        const exists = await FS.exists(cloudbookPath);
        if (!exists){
          await FS.mkdir(cloudbookPath).then(r=>{
        
          }).catch(err=>{
              console.log(err)
              return Alert.alert("Erro ao criar pasta")
              
          })
        }
        navigation.navigate('Dashboard')
        
    }

 

    
    

    return(
        <Container>
            <Header>
                <TitleWrapper>
                    <LogoSvg
                        width={RFValue(120)}
                        height={RFValue(113)}
                    />

                    <Title>
                      Organize seus estudos{'\n'}
                      de forma {'\n'}
                      simples e linda!
                        
                    </Title>
                </TitleWrapper>

                <SignInTitle>
                    Faça seu login com {'\n'}
                    uma das contas abaixo
                </SignInTitle>
            </Header>

            <Footer>
                <FooterWrapper>

                <SignInSocialButton
                    title="Iniciar imersão"
                    svg={RocketSvg}
                    onPress={handleStart}
                />
                  
                   
                </FooterWrapper>

            </Footer>
        </Container>
    )
}