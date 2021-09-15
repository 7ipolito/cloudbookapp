import React from 'react';
import { TextInputProps } from 'react-native';
import { Container,Error, Icon, InputText } from './styles';

interface Props extends TextInputProps{
    icon:string;
    error?:string | null;
}

export function Input({icon,error,...rest}:Props){
    return(
        <>
        <Container>
            <Icon name={icon}/>
            <InputText 
            {...rest}/>
           
        </Container>
         {error && <Error>{error}</Error>}
         </>
    );
}