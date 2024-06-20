
    import React, { useCallback, useState } from 'react';

    import{
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
    LoadContainer
    } from './styles';

    import { Input } from '../../components/Forms/Input';
    import { SelectButton } from '../../components/SelectButton';
    import { ActivityIndicator, Alert, Modal } from 'react-native';
    import { SelectEmoji } from '../SelectEmoji';
    import { Button } from '../../components/Button';
    import AsyncStorage from '@react-native-async-storage/async-storage';
    import { useFocusEffect } from '@react-navigation/native';
    import * as ImagePicker from 'expo-image-picker';
    import theme from '../../global/theme';

    export function Profile({navigation}:any){
    const [emoji,setEmoji]=useState({
    key: '14',
    title:'Bandeira do Brasil',
    emoji:'🇧🇷'
    })    

    const[nameUser,setNameUser]=useState('User')
    const[ImageUser,setImageUser]=useState('');
    const[errorInput,setErrorInput]=useState('');
    const[imageSelected,setImageSelected]=useState(false);

    const [emojiModalOpen,setEmojiModalOpen]=useState(false);
    const [isLoading,setIsLoading]=useState(true);


    function handleCloseSelectEmojiModal(){
    setEmojiModalOpen(false);
    }

    function handleOpenSelectEmojiModal(){
    setEmojiModalOpen(true);
    }

    const handleGallery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    quality: 1,
    });

    if (result.cancelled) {
    console.log(result);
    } else {
    
    setImageSelected(true);
        setImageUser(result.uri || '');
    }
    }

    function handleGoBack(){
    navigation.goBack();
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
        setImageSelected(true)
    }

    setNameUser(nameUser || 'User')


    if(currentEmoji.emoji){
        setEmoji(currentEmoji)
    }

    setIsLoading(false);
    } catch (error) {
    console.log(error)
    setIsLoading(false);
    return Alert.alert('Erro ao salvar')

    }
    }

    useFocusEffect(useCallback(()=>{
    getData();
    },[]))

    return(
    <Container>
    {isLoading==false ?(
        <>
    <Header>
    <BackButton onPress={handleGoBack}>
        <IconBack name='md-arrow-back'/>
    </BackButton>
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
        </>
    ):(
        <LoadContainer>
                <ActivityIndicator
                size="large"
                color={theme.colors.shape}
                />
        </LoadContainer>
    )}

    </Container>
    )
    }

