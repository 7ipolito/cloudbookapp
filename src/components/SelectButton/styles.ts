import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled(RectButton)`
    width: ${RFValue(295)}px;
    height: ${RFValue(60)}px;

    background-color: ${({ theme }) => theme.colors.input};

    flex-direction: row;

    justify-content: space-between;
    align-items: center;

    border-radius: 5px;
    padding: 18px 16px;

    margin-bottom: 16px;
`;

export const Text = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
    color: ${({ theme }) => theme.colors.shape};
`;
export const Icon = styled(Feather)`
    font-size: ${RFValue(20)}px;
    color: ${({ theme }) => theme.colors.iconInput};
`;
