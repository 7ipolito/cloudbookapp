import React from 'react'
import { Container, Title } from './styles'
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

interface Props extends RectButtonProps{
    title:string;
    icon: React.FC<SvgProps>;
    onPress:()=>void;

}

export function Card({
    title,
    icon:Icon,
    onPress,
    ...rest
    
}:Props){
    return(
        <Container 
        onPress={onPress}
        
        {...rest}>
            <Icon />
            <Title>{title}</Title>
        </Container>
    )
}