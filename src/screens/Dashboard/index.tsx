import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Card } from "../../components/Card";
import { FabButton } from "../../components/FabButton";
import { Repository, RepositoryProps } from "../../components/Repository";
import { options } from "../../utils/options";
import { NavigationProps } from "../AddImage";
import { Container, NameUser, PhotoButton, Slider,Cards,Title } from "./styles";
import{
    Header,
    Text,
    Emoji,
    Photo,
    Repositories,
    RepositoryList
    
} from './styles';

export interface DataListProps extends RepositoryProps{
    id: string;
}

export const repositories:DataListProps[]=[
    {
        id:'1',
        title:'Repositório ISERJ',
        image:'https://static.wixstatic.com/media/8c7e96_5af7935a27e54268ba51518d64c4d732~mv2.jpg/v1/fill/w_280,h_331,al_c,q_80,usm_0.66_1.00_0.01/f5.jpg',
        number_subjects:3,
        date:'30/04/2021',
    },
    {
        id:'2',
        title:'Repositório Fisk',
        image:'https://pbs.twimg.com/profile_images/1333730432576348161/Oz8MkA3X_400x400.jpg',
        number_subjects:3,
        date:'30/04/2021',
    },
    {
        id:'3',
        title:'Poemas',
        image:'https://a-static.mlcdn.com.br/618x463/painel-de-festa-em-tecido-sublimado-3d-caminho-na-floresta-sublime-sonhos/sublimesonhos/614357441/6a02b48244ffbcef0bf683dd4997e275.jpg',
        number_subjects:3,
        date:'30/04/2021',
    },
    {
        id:'4',
        title:'Jogos',
        image:'https://c4.wallpaperflare.com/wallpaper/246/739/689/digital-digital-art-artwork-illustration-abstract-hd-wallpaper-thumb.jpg',
        number_subjects:3,
        date:'30/04/2021',
    },
    {
        id:'5',
        title:'Compras',
        image:'https://png.pngtree.com/png-clipart/20190520/original/pngtree-shopping-cart-vector-icon-png-image_3725474.jpg',
        number_subjects:3,
        date:'30/04/2021',
    }
]

export function Dashboard({}){
    const navigation = useNavigation<NavigationProps>()
    const [nameUser,setNameUser]= useState('User');
    const [emoji,setEmoji]=useState({
        key: '1',
        title:'Maçã',
        emoji:'🍎'
    })
   

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

    function handleAddImage(){
        navigation.navigate('AddImage')
    }

    function handleAddRepository(){
        navigation.navigate('AddRepository')
    }

    function handleChangeProfile(){
        navigation.navigate('Profile')
    }

    function handleNavigate(nameScreen:string){
            if(!nameScreen)
                return Alert.alert("Funcionalidade não implementada")
            navigation.navigate(nameScreen)    
    }

    function handleGoSubjects(){
        navigation.navigate('Subjects')
    }

    useFocusEffect(useCallback(()=>{
        getData();
    },[]))

    return(
        <Container>
            <ScrollView>
            <Header>
                <Text>
                    Bem vindo(a),&nbsp; &nbsp; 
                    <NameUser>
                    {nameUser}
                    </NameUser>
                    
                </Text>
                <Emoji>
                {emoji.emoji}
                </Emoji>
                <PhotoButton 
                    onPress={handleChangeProfile}
                >
                <Photo 
                    source={{uri:'https://wallery.app/dufovot/naruto-wallpaper.webp'}}
                />
                </PhotoButton>
            </Header>
            <Cards>
                <Slider>
                    {options.map(option=>(
                        <Card 
                            onPress={()=>handleNavigate(option.screen)}
                            key={option.key}
                            title={option.title}
                            icon={option.icon}
                        />

                    ))}
                    
                    
                </Slider>
            </Cards>
            <Title>Repositórios</Title>
            <Repositories>

                <RepositoryList
                    data={repositories}
                    keyExtractor={item => item.id}
                    renderItem={({item})=> <Repository onPress={handleGoSubjects} data={item}/>}
                />
                
            
                
            </Repositories>
            </ScrollView>
            <FabButton
                icon='addfolder'
                type='addRepository'
                onPress={handleAddRepository}
             />
        </Container>
    )
}

