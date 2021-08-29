import React from 'react';
import { Emoji, Container, Icon } from './styles';

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
            <Emoji>{emoji} {title}</Emoji>
            <Icon name="chevron-down"/>
        </Container>
    )
}

