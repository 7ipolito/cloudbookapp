import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Alert, LogBox } from "react-native";
import { ReadDirItem } from "react-native-fs";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Card } from "../../components/Card";
import { FabButton } from "../../components/FabButton";
import { Repository, RepositoryProps } from "../../components/Repository";
import { cloudbookPath, options } from "../../utils/options";
import { NavigationProps } from "../AddImage";
import { Container, NameUser, PhotoButton, Slider,Cards,Title } from "./styles";
import uuid from 'react-native-uuid';

import{
    Header,
    Text,
    Emoji,
    Photo,
    Repositories,
    RepositoryList
    
} from './styles';
import * as FS from 'react-native-fs';

export interface DataListProps extends RepositoryProps{
    id: string;
}


export function Dashboard({}){
    const navigation = useNavigation<NavigationProps>()
    const [nameUser,setNameUser]= useState('User');
    const [repositories,setRepositories]=useState<DataListProps[]>([])
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

    async function listRepositories(){
        const folders:ReadDirItem[] = await FS.readDir(cloudbookPath)

        const repositories:DataListProps[] =[]
        folders.map((folder=>{
            repositories.push({
                id:String(uuid.v4()),
                date:Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  }).format(folder.mtime),
                image:'https://png.pngtree.com/png-clipart/20190520/original/pngtree-shopping-cart-vector-icon-png-image_3725474.jpg',
                number_subjects:0,
                title:folder.name
            })
        }))

        
        setRepositories(repositories)
        
      
      
  }


    useFocusEffect(useCallback(()=>{
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        listRepositories();
        getData();
    },[]))

    return(
        <Container>
            <ScrollView>
            <Header>
                <Text>
                    Bem vindo(a),{'\n'}
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

