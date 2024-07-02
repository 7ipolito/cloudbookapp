import React, { useCallback, useEffect, useState } from 'react';

import {
    Header,
    Title,
    Form,
    Photo,
    TargetCamera,
    BackButton,
    ChangePhoto,
    CircleCamera,
    Container,
    Footer,
    IconBack,
    IconExit,
    LoadContainer,
    FooterContainer,
    LoadUploadContainer
} from './styles';

import { Input } from '../../components/Forms/Input';
import { SelectButton } from '../../components/SelectButton';
import { ActivityIndicator, Alert, Modal } from 'react-native';
import { Emoji, SelectEmoji } from '../SelectEmoji';
import { Button } from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import theme from '../../global/theme';
import { useAuth } from '../../hooks/useAuth';
import { emojis } from '../../utils/options';
import { api } from '../../api/axios';



export function Profile({ navigation }: any) {
    const {logout, user,login} = useAuth()

     const findEmoji = emojis.find(e=>e.key==user?.emoji);
     const [emoji, setEmoji] = useState<Emoji>(findEmoji!);


    const [nameUser, setNameUser] = useState(user?.name);
    const [imageUser, setImageUser] = useState('');
    const [errorInput, setErrorInput] = useState('');
    const [imageSelected, setImageSelected] = useState(false);

    const [emojiModalOpen, setEmojiModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingUpload, setIsLoadingUpload] = useState(false);

    useEffect(()=>{
        console.log(imageUser)
    },[imageUser])

    function handleCloseSelectEmojiModal() {
        setEmojiModalOpen(false);
    }

    function handleOpenSelectEmojiModal() {
        setEmojiModalOpen(true);
    }

    const handleGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        });

        if (result.canceled) {
            console.log(result);
        } else {
            setIsLoadingUpload(true)
            await handleChangePhotoProfile(result.assets[0].uri)
         
        }
    };

    function handleGoBack() {
        navigation.goBack();
    }

    function handleLogout(){
        logout()
        navigation.navigate("SignIn")
    }

    async function handleChangePhotoProfile(uriFile:string){
    try {
     
        const formData = new FormData();
        formData.append('file', {
          uri: uriFile,
          type: 'image/jpeg', // ou image/png dependendo do formato da sua imagem
          name: 'photoUser.jpg',
        });
      const response = await api.post(`/users/${user?.id}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });             
      console.log(response.data.url)
            setImageUser(response.data.photo)
            setImageSelected(true);
            setIsLoadingUpload(false)

    //   return response.data.url
        } catch (error) {
            setIsLoadingUpload(false)


            console.log(error)
        } 
    }

    async function handleSave() {
        setErrorInput('');
        if (nameUser=='') return setErrorInput('Mandatory Filling');

        try {
            const response = await api.put(`/users/${user?.id}`, {
                name: nameUser,
                emoji: emoji?.key,
                photo:imageUser
              });
              login(response.data)
            navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error);
            return Alert.alert('Erro ao salvar');
        }
    }

    // async function getData() {
    //     try {
    //         const nameUser = await AsyncStorage.getItem('nameUser');

    //         const emojiUser = await AsyncStorage.getItem('emojiUser');

    //         const imageUser = await AsyncStorage.getItem('imageUser');

    //         const currentEmoji = emojiUser ? JSON.parse(emojiUser) : '';

    //         setImageUser(imageUser || '');
    //         if (imageUser != null && imageUser != '') {
    //             setImageSelected(true);
    //         }

    //         setNameUser(nameUser || 'User');

    //         if (currentEmoji.emoji) {
    //             setEmoji(currentEmoji);
    //         }

    //         setIsLoading(false);
    //     } catch (error) {
    //         console.log(error);
    //         setIsLoading(false);
    //         return Alert.alert('Erro ao salvar');
    //     }
    // }

    useFocusEffect(
        useCallback(() => {
            // getData();
        }, [])
    );

    return (
        <Container>
            {isLoading == false ? (
                <>
                    <Header>
                        <BackButton onPress={handleGoBack}>
                            <IconBack name="arrow-back" />
                        </BackButton>
                        <Title>My profile</Title>
                        <BackButton onPress={handleLogout}>
                            <IconExit name="power" />
                        </BackButton>
                       
                    </Header>

                    <Form>
                        {!isLoadingUpload ? (<ChangePhoto onPress={handleGallery}>
                            {imageSelected ? (
                                <Photo source={{ uri: imageUser }} />
                            ) : (
                                user?.photo ?(
                                    <Photo
                                    source={{uri:user?.photo}}
                                />
                                ):(
                                    <Photo
                                    source={require('../../assets/404_profile.png')}
                                />
                                )
                            )}

                            <CircleCamera onPress={handleGallery}>
                                <TargetCamera name="camera" />
                            </CircleCamera>
                        </ChangePhoto>):(
                            <LoadUploadContainer>
                                <ActivityIndicator
                                    size="large"
                                    color={theme.colors.shape}
                                />
                            </LoadUploadContainer>
                        )}

                        <Input
                            icon="person-outline"
                            value={nameUser}
                            maxLength={15}
                            onChangeText={(text) => setNameUser(text)}
                            error={errorInput === '' ? null : errorInput}
                        />

                        <SelectButton
                            title={emoji?.title}
                            emoji={emoji?.emoji}
                            onPress={handleOpenSelectEmojiModal}
                        />
                    </Form>
                    <FooterContainer>
                        <Footer>
                            <Button
                                title="Confirm changes"
                                onPress={handleSave}
                            />
                        </Footer>
                    </FooterContainer>

                    <Modal
                        statusBarTranslucent
                        animationType={'slide'}
                        visible={emojiModalOpen}
                    >
                        <SelectEmoji
                            emoji={emoji}
                            setEmoji={setEmoji}
                            closeSelectEmoji={handleCloseSelectEmojiModal}
                        />
                    </Modal>
                </>
            ) : (
                <LoadContainer>
                    <ActivityIndicator
                        size="large"
                        color={theme.colors.shape}
                    />
                </LoadContainer>
            )}
        </Container>
    );
}
