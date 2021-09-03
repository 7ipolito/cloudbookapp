import React from 'react';

import { IconExit } from '../../screens/Profile/styles';
import { Container,
     IconBack,
     IconScreen,
     ButtonIcon,
     BackButton,
    Title,
    ImageButton,
    ImageHeader } from './styles';
import {Image} from 'react-native';
import { SvgProps } from 'react-native-svg';
interface Props{
    title:string;
    image?:string;
    type:'addContent' | 'listThings';

}
export function Header({
    title,
    image,
    type
}:Props){
    return(
        <Container>
        <BackButton>
            <IconBack name='md-arrow-back'/>    
        </BackButton>
        <Title>{title}</Title>
        
        {type==='addContent' ?(
         <BackButton>
             <IconBack name=''/>    
         </BackButton>
        ):(
        <ImageButton>
            <ImageHeader source={{uri:image}}/>    
        </ImageButton>
        )}
       
        
        
        </Container>
    )
}