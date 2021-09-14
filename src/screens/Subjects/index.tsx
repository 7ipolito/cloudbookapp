import { useFocusEffect, useNavigation,  } from '@react-navigation/native';
import React,{useCallback, useState} from 'react';
import { ScrollView } from 'react-native';
import { ReadDirItem } from 'react-native-fs';
import { FabButton } from '../../components/FabButton';
import { Header } from '../../components/Header';
import { Repository } from '../../components/Repository';
import { Subject, SubjectProps } from '../../components/Subject';
import { cloudbookPath, subjectsImagesPath } from '../../utils/options';
import { NavigationProps } from '../AddImage';
import uuid from 'react-native-uuid';
import * as FS from 'react-native-fs';
import { Container,Title,SubjectsView,SubjectList, WhithoutSubjectContent, TextNotSubject } from './styles';
import { usePath } from '../../hooks/usePath';
import theme from '../../global/theme';
import { Entypo } from '@expo/vector-icons'; 

export interface DataListProps extends SubjectProps{
    id: string;
}


export const subjects:DataListProps[]=[
    {
        id:'1',
        title:'Wallpapers Apple',
        image:'https://cdn.wallpapersafari.com/9/80/zFiWeU.jpg',
        number_matter:3,
        date:'30/04/2021',
    },
    {
        id:'2',
        title:'Matématica',
        image:'https://miro.medium.com/max/1400/1*L76A5gL6176UbMgn7q4Ybg.jpeg',
        number_matter:5,
        date:'30/04/2021',
    },
    {
        id:'3',
        title:'Ideias Criativas',
        image:'https://img.quizur.com/f/img5c05a79605a213.96985784.jpg?lastEdited=1543874461',
        number_matter:6,
        date:'30/04/2021',
    },
    {
        id:'4',
        title:'Códigos',
        image:'https://wallpaperaccess.com/full/3949076.jpg',
        number_matter:10,
        date:'30/04/2021',
    },
    {
        id:'5',
        title:'Filmes para ver',
        image:'https://br.jetss.com/wp-content/uploads/2021/01/Sem-tempo-para-morrer-Instagram.jpg',
        number_matter:10,
        date:'30/04/2021',
    },
 
]

export function Subjects({navigation}:any){
    
    
    const {title,path,imageTab}= usePath();
    
    const [subjects,setSubjects]=useState<DataListProps[]>([])

    
    function handleAddSubject(){
        navigation.navigate('AddSubject')
    }
    function handleGoContents(){
        navigation.navigate('Contents')
    }

    async function listSubjects(){
        const folders:ReadDirItem[] = await FS.readDir(path)
        
        const subjects:DataListProps[] = []
        folders.map((folder=>{
            const nameImageFormatted = folder.name.substring(folder.name.indexOf("|")+1);
            const nameSubjectFormatted = folder.name.substring(0,folder.name.indexOf("|"))
            
            subjects.push({
                id:String(uuid.v4()),
                date:Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: 'narrow',
                    year: 'numeric'
                  }).format(folder.mtime),
                image:"file://"+subjectsImagesPath+"/"+nameImageFormatted+".jpg",
                number_matter:0,
                title:nameSubjectFormatted,
                
            })
            
        }))

        setSubjects(subjects)

      
      }

      useFocusEffect(useCallback(()=>{
            listSubjects();
      },[]))
    return(
        <Container>
            
            <Header
                title={title}
                image={imageTab}
                type='listThings'
                
            />
            <ScrollView>

            {subjects[0] &&<Title>Disciplinas</Title>}
            {
                subjects[0] ?(
                <SubjectsView>

                    <SubjectList
                        data={subjects}
                        keyExtractor={item => item.id}
                        renderItem={({item})=> <Subject onPress={handleGoContents} data={item}/>}
                    />



                </SubjectsView>
                ):(
                    <WhithoutSubjectContent>
                    <Entypo name="folder-images" size={45} color={theme.colors.primary} />
                    <TextNotSubject>Não há disciplinas</TextNotSubject>
                     </WhithoutSubjectContent>
                )
            }
            
            </ScrollView>
            <FabButton
                icon='page-add'
                type='addSubject'
                onPress={handleAddSubject}
             />
        </Container>
    )
}