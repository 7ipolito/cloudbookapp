import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native';
import { Input } from '../Forms/Input';
import { Container, Error } from './styles';

interface Props extends TextInputProps {
    control: Control;
    name: string;
    icon: string;
    error?: string;
}

export function InputForm({ control, name, icon, error, ...rest }: Props) {
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <Input
                        icon={icon}
                        onChangeText={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />
            {error && <Error>{error}</Error>}
        </Container>
    );
}
