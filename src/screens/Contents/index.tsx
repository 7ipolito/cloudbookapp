import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ScrollView } from 'react-native';
import { Content, ContentProps } from '../../components/Content';
import { FabButton } from '../../components/FabButton';
import { Header } from '../../components/Header';
import { Repository } from '../../components/Repository';
import { Subject, SubjectProps } from '../../components/Subject';
import { NavigationProps } from '../AddImage';

import { Container,Title,Repositories,ContentList } from './styles';

export interface DataListProps extends ContentProps{
    id: string;
}


export const contents:DataListProps[]=[
    {
        id:'1',
        title:'Hipólito(Filho De Teseu)',
        type:'photo',
        image:'https://upload.wikimedia.org/wikipedia/commons/0/0f/Hippolytus_Sir_Lawrence_Alma_Tadema.jpg',
        subject:'Mitologia Grega',
        date:'30/04/2021',
    },
    {
        id:'2',
        title:'Quem foi Hipólito?',
        type:'annotation',
        text:'Hipólito (em grego: Ἱππόλυτος; "libertador dos cavalos"[1]), na mitologia grega, é o filho de Teseu e de Hipólita, rainha das amazonas, que herdou da mãe o gosto da caça e dos exercícios violentos. Adorava Artemis e menosprezava Afrodite.',
        subject:'Mitologia Grega',
        date:'30/04/2021',
    },
    {
        id:'3',
        title:'Spider Man',
        type:'photo',
        image:'https://i.pinimg.com/originals/bf/82/f6/bf82f6956a32819af48c2572243e8286.jpg',
        subject:'Wallpapers Apple',
        date:'30/04/2021',
    },
    {
        id:'4',
        title:'Caveira Estilosa',
        type:'photo',
        image:'https://images6.alphacoders.com/106/1069078.jpg',
        subject:"Wallpapers Apple",
        date:'30/04/2021',
    },
 
]

export function Contents(){
    const navigation = useNavigation<NavigationProps>()

    function handleAddSubject(){
        navigation.navigate('AddSubject')
    }
    return(
        <Container>
            
            <Header
                title="Wallpapers Apple"
                image='https://images.hdqwalls.com/wallpapers/apple-logo-bw-oz.jpg'
                type='listThings'
                
            />
            <ScrollView>

            <Title>Conteúdos</Title>
            <Repositories>

            <ContentList
                data={contents}
                keyExtractor={item => item.id}
                renderItem={({item})=> <Content data={item}/>}
            />



            </Repositories>
            </ScrollView>
            <FabButton
                icon='addfile'
                type='addFile'
                onPress={handleAddSubject}
             />
        </Container>
    )
}