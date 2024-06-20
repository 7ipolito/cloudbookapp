import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFValue(56)}px;
    margin-top: 68px;

    flex-direction: row;
    justify-content: space-between;
`;
export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-family: ${({ theme }) => theme.fonts.bold};
    font-size: ${RFValue(20)}px;
`;

export const IconBack = styled(Ionicons)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(22)}px;
    padding: 0 16px;
`;
export const IconExit = styled(Feather)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(22)}px;
    padding: 0 16px;
`;

export const Form = styled.View`
    align-items: center;
`;
export const ChangePhoto = styled(RectButton)``;

export const Photo = styled.Image`
    width: ${RFValue(186)}px;
    height: ${RFValue(186)}px;

    border-radius: 200px;
`;

export const CircleCamera = styled(RectButton)`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 25px;
    background-color: ${({ theme }) => theme.colors.input};

    align-items: center;
    justify-content: center;
    position: absolute;
    right:25px;
    bottom:0;
`;

export const TargetCamera = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = styled.View`
    align-items: center;
    margin-top: ${RFValue(170)}px;
`;
export const LoadContainer = styled.View`
    flex: 1%;
    justify-content: center;
    align-items: center;
`;
export const BackButton = styled(BorderlessButton)``;
