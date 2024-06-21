import { AntDesign, Foundation } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: ${RFValue(65)}px;
    height: ${RFValue(65)}px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.primary};

    align-items: center;
    justify-content: center;
    position: absolute;
    bottom:10px;
    right: 10px;
`;

export const IconRepository = styled(AntDesign)`
    font-size: ${RFValue(24)}px;
`;

export const IconSubject = styled(Foundation)`
    font-size: ${RFValue(28)}px;
`;

export const IconContent = styled(AntDesign)`
    font-size: ${RFValue(24)}px;
`;
