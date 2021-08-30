import React from 'react';
import { Text, Container, Icon } from './styles';

interface Props{
    title:string;
    emoji?:string;
    onPress:()=>void;
}

export function SelectButton({
    title,
    emoji,
    onPress
}:Props){
    return(
        <Container onPress={onPress}>
            <Text>{emoji} {title}</Text>
            <Icon name="chevron-down"/>
        </Container>
    )
}

