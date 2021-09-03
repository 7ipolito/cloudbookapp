import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { FabButton } from '../../components/FabButton';
import { Header } from '../../components/Header';
import { Repository } from '../../components/Repository';
import { Subject, SubjectProps } from '../../components/Subject';
import { NavigationProps } from '../AddImage';

import { Container,Title,Repositories,SubjectList } from './styles';

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

export function Subjects(){
    const navigation = useNavigation<NavigationProps>()

    function handleAddSubject(){
        navigation.navigate('AddSubject')
    }
    function handleGoContents(){
        navigation.navigate('Contents')
    }
    return(
        <Container>
            
            <Header
                title="Repositório ISERJ"
                image='https://static.wixstatic.com/media/8c7e96_5af7935a27e54268ba51518d64c4d732~mv2.jpg/v1/fill/w_280,h_331,al_c,q_80,usm_0.66_1.00_0.01/f5.jpg'
                type='listThings'
                
            />
            <ScrollView>

            <Title>Disciplinas</Title>
            <Repositories>

            <SubjectList
                data={subjects}
                keyExtractor={item => item.id}
                renderItem={({item})=> <Subject onPress={handleGoContents} data={item}/>}
            />



            </Repositories>
            </ScrollView>
            <FabButton
                icon='page-add'
                type='addSubject'
                onPress={handleAddSubject}
             />
        </Container>
    )
}