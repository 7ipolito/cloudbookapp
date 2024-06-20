import { FlatList } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { DataListProps } from '.';

export const Container = styled.View`
    flex: 1%;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(56)}px;
    margin-top: 68px;

    flex-direction: row;
    justify-content: space-between;
`;

export const TextNotSubject = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-top: 7px;
    font-size: ${RFValue(24)}px;
`;

export const WhithoutSubjectContent = styled.View`
    margin-top: 220px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(25)}px;

    padding: 14px 24px;
`;

export const SubjectList = styled(
    FlatList as new () => FlatList<DataListProps>
).attrs({
    showsVerticalScrollIndicator: false
})``;

export const SubjectsView = styled.View`
    align-items: center;
`;
