import React from 'react';
import { Container, Title } from './styles';

interface Props{
    title:string;
    onPress:()=>void;
}

export function Button({
    title,
    onPress
}:Props){
    return(
        <Container
            activeOpacity={0.8}
         onPress={onPress}>
            <Title>{title}</Title>
        </Container>
    )
}