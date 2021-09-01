import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, Icon } from './styles';

interface Props extends RectButtonProps{
    icon:string;
}
export function FabButton({
    icon,
    ...rest
    
}:Props){
    return(
        <Container {...rest}>
            <Icon name={icon}/>
        </Container>
    )
}