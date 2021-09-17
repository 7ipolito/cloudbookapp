import { useFocusEffect, useNavigation,  } from '@react-navigation/native';
import React,{useCallback, useState} from 'react';
import { ScrollView } from 'react-native';
import { ReadDirItem } from 'react-native-fs';
import { FabButton } from '../../components/FabButton';
import { Header } from '../../components/Header';
import { Subject, SubjectProps } from '../../components/Subject';
import { subjectsImagesPath } from '../../utils/options';
import uuid from 'react-native-uuid';
import * as FS from 'react-native-fs';
import { Container,Title,SubjectsView,SubjectList, WhithoutSubjectContent, TextNotSubject } from './styles';
import { usePath } from '../../hooks/usePath';
import theme from '../../global/theme';
import { Entypo } from '@expo/vector-icons'; 

export interface DataListProps extends SubjectProps{
    id: string;
}

export function Subjects({navigation}:any){
    
    
    const {imageTabRepository,pathRepository,titleRepository,setPathSubject,setTitleSubject,setImagePathTabSubject}= usePath();
    
    const [subjects,setSubjects]=useState<DataListProps[]>([])

    
    function handleAddSubject(){
        navigation.navigate('AddSubject')
    }
    function handleGoContents(title:string,image:string,path:string){
        setTitleSubject(title)
        setImagePathTabSubject(image)
        setPathSubject(path)
        
        navigation.navigate('Contents')
    }

    async function listSubjects(){
        const folders:ReadDirItem[] = await FS.readDir(pathRepository)
        
        const subjects:DataListProps[] = []
        folders.map((async folder=>{
            const nameImageFormatted = folder.name.substring(folder.name.indexOf("|")+1);
            const nameSubjectFormatted = folder.name.substring(0,folder.name.indexOf("|"));

            
            const dirItens = await FS.readDir(folder.path)
            const countContent=dirItens.length;

            
            
            subjects.push({
                id:String(uuid.v4()),
                date:Intl.DateTimeFormat('pt-BR', {
                    day: '2-digit',
                    month: 'narrow',
                    year: 'numeric'
                  }).format(folder.mtime),
                image:"file://"+subjectsImagesPath+"/"+nameImageFormatted+".jpg",
                number_matter:countContent,
                title:nameSubjectFormatted,
                path:folder.path
                
            })
            setSubjects(subjects)
            
        }))

        
        

      
      }

      useFocusEffect(useCallback(()=>{
            listSubjects();
      },[]));
      
    return(
        <Container>
            
            <Header
                title={titleRepository}
                image={imageTabRepository}
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
                        renderItem={({item})=> <Subject onPress={()=>handleGoContents(item.title,item.image,item.path)} data={item}/>}
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