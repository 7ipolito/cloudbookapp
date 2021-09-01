import React from 'react';
import { BackButton } from '../../screens/AddImage/styles';
import { IconExit } from '../../screens/Profile/styles';
import { Container, IconBack, IconScreen,ButtonIcon, Title } from './styles';
import {Image} from 'react-native';
import { SvgProps } from 'react-native-svg';
interface Props{
    title:string;
    icon: React.FC<SvgProps>;

}
export function Header({
    title,
    icon:Icon
}:Props){
    return(
        <Container>
        <BackButton>
            <IconBack name='md-arrow-back'/>    
        </BackButton>
        <Title>{title}</Title>
        
             <Icon width={30} style={{marginRight:16}} />
        
        
        </Container>
    )
}