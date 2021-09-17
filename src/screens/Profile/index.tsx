import React, { useCallback, useState } from 'react';
import { ChangePhoto, CircleCamera, Container, Footer, IconBack, IconExit } from './styles';
import{
    Header,
    Title,
    Form,
    Photo,
    TargetCamera,
} from './styles'
import { Input } from '../../components/Forms/Input';
import { SelectButton } from '../../components/SelectButton';
import { Alert, Modal } from 'react-native';
import { SelectEmoji } from '../SelectEmoji';
import { Button } from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../Shortcurts/AddImage';
import { useEffect } from 'react';
import * as ImagePicker from 'react-native-image-picker';
export function Profile(){
    const [emoji,setEmoji]=useState({
        key: '14',
        title:'Bandeira do Brasil',
        emoji:'🇧🇷'
    })
    const navigation = useNavigation<NavigationProps>()

    const[nameUser,setNameUser]=useState('User')
    const[ImageUser,setImageUser]=useState('');
    const[errorInput,setErrorInput]=useState('');
    const[imageSelected,setImageSelected]=useState(false);

    const [emojiModalOpen,setEmojiModalOpen]=useState(false);


    function handleCloseSelectEmojiModal(){
        setEmojiModalOpen(false);
    }

    function handleOpenSelectEmojiModal(){
        setEmojiModalOpen(true);
    }

    function handleGallery(){
        const options:any = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            }
        }

        ImagePicker.launchImageLibrary(options, (response) => {
      
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorCode);
            } else {
              setImageSelected(true);
              setImageUser(response.assets![0].uri || '');
            
            }
          });
    }

    async function handleSave(){
       setErrorInput('')
       if(!nameUser)
       return setErrorInput('Preenchimento Obrigátorio')
       
       try {
           await AsyncStorage.setItem('imageUser',ImageUser)
           await AsyncStorage.setItem('nameUser',nameUser)
           await AsyncStorage.setItem('emojiUser',JSON.stringify(emoji))


           navigation.navigate('Dashboard');
       } catch (error) {
           console.log(error)
           return Alert.alert('Erro ao salvar')
       }
    }

    async function getData(){
        
        try {
            const nameUser=await AsyncStorage.getItem('nameUser');
            
            const emojiUser=await AsyncStorage.getItem('emojiUser');

            const imageUser=await AsyncStorage.getItem('imageUser');

            const currentEmoji = emojiUser? JSON.parse(emojiUser) : '';

            setImageUser(imageUser || '')
            if(imageUser!=null && imageUser!=''){
                console.log(imageUser)
                setImageSelected(true)
            }
            
            setNameUser(nameUser || 'User')

            if(currentEmoji.emoji){
                setEmoji(currentEmoji)
            }
           
            
        } catch (error) {
            console.log(error)
           return Alert.alert('Erro ao salvar')
        }
     }

    useFocusEffect(useCallback(()=>{
        getData();
    },[]))

    return(
        <Container>
            <Header>
                <IconBack name='md-arrow-back'/>
                <Title>Meu Perfil</Title>
                <IconExit name='power'/>
            </Header>

            <Form>
            <ChangePhoto onPress={handleGallery}>
                    {imageSelected 
                        ?<Photo  source={{uri:ImageUser}}/>
                        :<Photo  source={require('../../assets/404_profile.png')}/>
                    }
                   
                    <CircleCamera onPress={handleGallery}>
                       <TargetCamera name="camera"/>
                   </CircleCamera>
                   
            </ChangePhoto>

                

                <Input
                    icon='person-outline' 
                    value={nameUser}
                    maxLength={15}
                    onChangeText={text=>setNameUser(text)}
                    error={errorInput===""?null:errorInput}
                 />
                
                <SelectButton 
                    title={emoji.title}
                    emoji={emoji.emoji}
                    onPress={handleOpenSelectEmojiModal}
                />

                
            </Form>

            <Footer>
                <Button title='Confirmar mudanças' onPress={handleSave}/>
            </Footer>

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
        </Container>
    )
}