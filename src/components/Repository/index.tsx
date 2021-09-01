import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import{
    Container,
    Content,
    ImageRepository,
    Title,
    SubjectContent,
    DateContent,
    SubjectIcon,
    DateIcon,
    SubjectCount,
    Date
} from './styles';

export interface RepositoryProps{
    title:string;
    image:string;
    number_subjects:number;
    date:string;
}

interface Props extends RectButtonProps{
    data:RepositoryProps;
}

export function Repository({
    data,
    ...rest
}:Props){
    return(
        <Container {...rest}>
            <ImageRepository source={{uri:data.image}}/>
            <Content>
                <Title>{data.title}</Title>
                <SubjectContent>
                    <SubjectIcon name='subject'/>
                    <SubjectCount>{data.number_subjects} disciplinas</SubjectCount>
                </SubjectContent>
                <DateContent>
                    <DateIcon name='clock'/>
                    <Date>Criado em {data.date}</Date>
                </DateContent>
              
            </Content>
        </Container>
    )
}