import React from 'react';
import {Text, TextInput, TextInputProps, View} from 'react-native'
import { Container } from './styles';



const TextArea: React.FC<TextInputProps> = ({...rest}:TextInputProps) =>{
    return(
        <Container/>
    )
}

export default TextArea;