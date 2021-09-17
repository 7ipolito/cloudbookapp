import React from 'react';
import { Control, Controller } from 'react-hook-form';
import {Text, TextInput, TextInputProps, View} from 'react-native'
import { Container, TextAreaView,Error } from './styles';

interface Props extends TextInputProps{
    control:Control;
    name: string;
    error?:string;
}



interface Props extends TextInputProps{
    control:Control;
    name: string;
    error?:string;
}

export function TextArea({
    control,
    name,
    error,
    ...rest
}:Props){
    return(
        <Container>
        <Controller
            control={control}
            render={({field:{onChange,value}})=>(
                <TextAreaView
                onChangeText={onChange}
                value={value}
                {...rest}
                />
            )}
            name={name}
        />
         {error && <Error>{error}</Error>}
    </Container>
    )
}

