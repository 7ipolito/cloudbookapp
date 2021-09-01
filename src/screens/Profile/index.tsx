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
import { NavigationProps } from '../AddImage';
import { useEffect } from 'react';

export function Profile(){
    const [emoji,setEmoji]=useState({
        key: '0',
        title:'Maçã',
        emoji:'🍎'
    })
    const navigation = useNavigation<NavigationProps>()

    const[nameUser,setNameUser]=useState('User')
    const[errorInput,setErrorInput]=useState('');

    const [emojiModalOpen,setEmojiModalOpen]=useState(false);


    function handleCloseSelectEmojiModal(){
        setEmojiModalOpen(false);
    }

    function handleOpenSelectEmojiModal(){
        setEmojiModalOpen(true);
    }

    async function handleSave(){
       setErrorInput('')
       if(!nameUser)
       return setErrorInput('Preenchimento Obrigátorio')
       
       try {
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

            const currentEmoji = emojiUser ? JSON.parse(emojiUser) : [];

            setNameUser(nameUser || 'User')
            setEmoji(currentEmoji)
 
            
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
                <ChangePhoto>
                    <Photo source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQEmxvqSNl565Q/profile-displayphoto-shrink_800_800/0/1629309995504?e=1635379200&v=beta&t=jFX1GhKjO54e5-YQs_l5MQ00bmMXH6ECT-akxnolf0k'}}/>
                    <CircleCamera>
                        <TargetCamera name="camera"/>
                    </CircleCamera>
                </ChangePhoto>

                <Input
                    icon='person-outline' 
                    value={nameUser}
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