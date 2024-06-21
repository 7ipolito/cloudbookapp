import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
    Container,
    Content,
    ImageRepository,
    Title,
    SubjectContent,
    DateContent,
    SubjectIcon,
    DateIcon,
    SubjectCount,
    Date
} from './styles';

export interface SubjectProps {
    title: string;
    image: string;
    number_matter: number;
    date: string;
    path: string;
}

interface Props extends RectButtonProps {
    data: SubjectProps;
}

export function Subject({ data, ...rest }: Props) {
    return (
        <Container {...rest}>
            <ImageRepository source={{ uri: data.image }} />
            <Content>
                <Title>{data.title}</Title>
                <SubjectContent>
                    <SubjectIcon name="subject" />
                    {data.number_matter === 0 ? (
                        <SubjectCount>Sem conteúdos</SubjectCount>
                    ) : (
                        <SubjectCount>
                            {data.number_matter} conteúdos
                        </SubjectCount>
                    )}
                </SubjectContent>
                <DateContent>
                    <DateIcon name="clock" />
                    <Date>Criado em {data.date}</Date>
                </DateContent>
            </Content>
        </Container>
    );
}
