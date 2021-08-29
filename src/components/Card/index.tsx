import React from 'react'
import { Container, Title } from './styles'
import { SvgProps } from 'react-native-svg';
interface Props{
    title:string;
    icon: React.FC<SvgProps>;

}

export function Card({
    title,
    icon:Icon,
    ...rest
    
}:Props){
    return(
        <Container 
            activeOpacity={0.7}
        {...rest}>
            <Icon />
            <Title>{title}</Title>
        </Container>
    )
}