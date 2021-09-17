import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect} from "@react-navigation/native";
import React, { useCallback,useState } from "react";
import { Alert, LogBox,ActivityIndicator } from "react-native";
import { ReadDirItem } from "react-native-fs";
import { ScrollView } from "react-native-gesture-handler";
import { FabButton } from "../../components/FabButton";
import { Repository, RepositoryProps } from "../../components/Repository";
import { cloudbookPath, options, repositoriesImagesPath } from "../../utils/options";
import { Container, NameUser, PhotoButton, Slider,Cards,Title,LoadContainer, EmojiButton, TextNotRepository, WhithoutRepositoryContent } from "./styles";
import uuid from 'react-native-uuid';
import { Entypo } from '@expo/vector-icons'; 

import * as FS from 'react-native-fs';
import{
    Header,
    Text,
    Emoji,
    Photo,
    Repositories,
    RepositoryList
    
} from './styles';
import { usePath } from "../../hooks/usePath";
import theme from "../../global/theme";
import { Card } from "../../components/Card";


export interface DataListProps extends RepositoryProps{
    id: string;
}

export function Dashboard({navigation}:any){

    const [imageUser,setImageUser]=useState('');

    //Utilizando Hook
    const {setTitleRepository,setPathRepository,setImagePathTabRepository}= usePath();

    const [nameUser,setNameUser]= useState('User');
    const [repositories,setRepositories]=useState<DataListProps[]>([])
    const [emoji,setEmoji]=useState({
        key: '14',
        title:'Bandeira do Brasil',
        emoji:'🇧🇷'
    })
    const [isLoading,setIsLoading]=useState(true);
   

    async function getData(){
        
        try {
            const imageUser = await AsyncStorage.getItem("imageUser");

            const nameUser=await AsyncStorage.getItem('nameUser');
            
            const emojiUser=await AsyncStorage.getItem('emojiUser');

            const currentEmoji = emojiUser ? JSON.parse(emojiUser) : [];

            setImageUser(imageUser || '')
            setNameUser(nameUser || 'User')
            if(currentEmoji.emoji){
                setEmoji(currentEmoji)
            }
            setIsLoading(false)
            
        } catch (error) {
            console.log(error)
            setIsLoading(false)
           return Alert.alert('Erro reinicie a aplicação')
           
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
            
                return Alert.alert("Funcionalidade não implementada")
            
    }

    function handleGoSubjects(pathRepository:string,title:string,imageRepository:string){

        setTitleRepository(title)
        setImagePathTabRepository(imageRepository)
        setPathRepository(pathRepository)
        navigation.navigate('Subjects')
        
          
    }

    async function listRepositories(){
        const folders:ReadDirItem[] = await FS.readDir(cloudbookPath)
        
        const repositories:DataListProps[] =[]
        folders.map((async folder=>{

            const nameImageFormatted = folder.name.substring(folder.name.indexOf("|")+1);
            const nameRepositoryFormatted = folder.name.substring(0,folder.name.indexOf("|"))

            const dirItens = await FS.readDir(folder.path)
            const countSubjects=dirItens.length;
            
            if(folder.name!='images'){
                repositories.push({
                    id:String(uuid.v4()),
                    date:Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'narrow',
                        year: 'numeric'
                      }).format(folder.mtime),
                    image:"file://"+repositoriesImagesPath+"/"+nameImageFormatted+".jpg",
                    number_subjects:countSubjects,
                    title:nameRepositoryFormatted,
                    pathRepository:folder.path
                })
                setRepositories(repositories);
            }
            
        }))

        
        setIsLoading(false)

  }


    useFocusEffect(useCallback(()=>{
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
        getData();
        listRepositories();
        
    },[]))

    return(
        <Container>
            {isLoading==false?(
                <ScrollView>
                <Header>
                    <Text>
                        Bem vindo(a),{'\n'}
                        <NameUser>
                        {nameUser}
                        </NameUser>
                        
                    </Text>
                    <EmojiButton>
                        <Emoji>
                        {emoji.emoji}
                        </Emoji>
                    </EmojiButton>
                    
                    <PhotoButton 
                        onPress={handleChangeProfile}
                    >
                    {imageUser=== '' 
                        ?<Photo source={require('../../assets/404_profile.png')}/>
                        :<Photo source={{uri:imageUser}}/>
                    }
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
    
                {repositories[0] &&(<Title>Repositórios</Title>)}
                {repositories[0]?(
                      <Repositories>
    
                      <RepositoryList
                          data={repositories}
                          keyExtractor={item => item.id}
                          
                          renderItem={({item})=>
                           <Repository 
                              onPress={()=>
                                  handleGoSubjects(
                                      item.pathRepository,
                                      item.title,
                                      item.image)}
                                  data={item}/>
                              }
                      />
                      
                  
                      
                  </Repositories>
                ):(
                    <WhithoutRepositoryContent>
                        <Entypo name="folder" size={45} color={theme.colors.primary} />
                        <TextNotRepository>Não há repositórios</TextNotRepository>
                    </WhithoutRepositoryContent>
                    
                )}
                </ScrollView>
            ):(
                <LoadContainer>
                    <ActivityIndicator
                        
                        size="large"
                        color={theme.colors.shape}
                        
                    />
                </LoadContainer>
            )}
            
            <FabButton
                icon='addfolder'
                type='addRepository'
                onPress={handleAddRepository}
             />
        </Container>
    )
}