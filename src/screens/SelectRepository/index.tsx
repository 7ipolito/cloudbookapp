import React from 'react';
import { StatusBar } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { categories, emojis } from '../../utils/options';
import { repositories } from '../Dashboard';
import { Container, Footer, Header, Icon, Name, Repository, Separator, Title } from './styles';

export interface Repository{
    id:string;
    title:string;
    image:string;
    
}

interface Props{
    repository:Repository;
    setRepository: (repository:Repository)=>void;
    closeSelectRepository:()=>void;
}
export function SelectRepository({
    repository,
    setRepository,
    closeSelectRepository
}:Props){


    function handleRepositorySelect(repository: Repository){
        setRepository(repository);
    }

    return(
        <>
         <StatusBar 
            barStyle="dark-content"
            backgroundColor="transparent"
            translucent
        />
        <Container>
            <Header>
                <Title>Categoria</Title>
            </Header>

            <FlatList
            data={repositories}
            style={{flex:1,width:'100%'}}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
                <Repository
                onPress={()=> handleRepositorySelect(item)}
                isActive={repository.id === item.id}
                >
                <Name>{item.title}</Name>
            </Repository>
            )}
            ItemSeparatorComponent={()=><Separator/>}

            />

            <Footer>
              <Button 
              title="Selecionar Repositório"
              onPress={closeSelectRepository}/>
            </Footer>
                
        </Container>
        </>
    )
}