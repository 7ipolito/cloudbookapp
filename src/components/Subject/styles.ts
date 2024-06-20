import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled(RectButton)`
    background-color: ${({ theme }) => theme.colors.title};

    width: ${RFValue(340)}px;
    height: ${RFValue(110)}px;
    flex-direction: row;

    border-radius: 10px;

    margin-bottom: 16px;
`;

export const Content = styled.View`
    flex-direction: column;
`;

export const ImageRepository = styled(Image)`
    width: ${RFValue(72)}px;
    height: ${RFValue(72)}px;
    margin: 20px 16px;
    border-radius: 40px;
`;
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const SubjectContent = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const SubjectIcon = styled(MaterialIcons)`
    font-size: ${RFValue(15)}px;
    margin-right: 7px;

    color: ${({ theme }) => theme.colors.secondary};
`;
export const SubjectCount = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
export const DateContent = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const DateIcon = styled(Feather)`
    font-size: ${RFValue(15)}px;
    margin-right: 7px;

    color: ${({ theme }) => theme.colors.secondary};
`;
export const Date = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.regular};
`;
