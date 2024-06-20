import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    align-items: center;
`;
export const ImageContent = styled.Image`
    width: ${RFValue(325)}px;
    height: ${RFValue(185)}px;
`;

export const ChangePhoto = styled(RectButton)``;

export const CircleCamera = styled(RectButton)`
    width: ${RFValue(50)}px;
    height: ${RFValue(50)}px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: ${RFValue(265)}px;
    margin-top: ${RFValue(150)}px;
`;

export const TargetCamera = styled(Feather)`
    font-size: ${RFValue(20)}px;
`;

export const Footer = styled.View`
    align-items: center;
    margin-top: ${RFValue(180)}px;
`;
