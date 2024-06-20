import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Text, Container, Icon } from './styles';

interface Props extends RectButtonProps {
    title: string;
    emoji?: string;
    onPress: () => void;
}

export function SelectButton({ title, emoji, onPress }: Props) {
    return (
        <Container onPress={onPress}>
            <Text>
                {emoji} {title}
            </Text>
            <Icon name="chevron-down" />
        </Container>
    );
}
