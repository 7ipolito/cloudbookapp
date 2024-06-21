import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
export const Container = styled(RectButton)`
    width: ${RFValue(104)}px;
    height: ${RFValue(120)}px;
    background-color: ${({ theme }) => theme.colors.title};
    margin-right: 8px;

    margin-top: 16px;

    align-items: center;
    justify-content: center;

    border-radius: 10px;
    border: 1px solid black;
`;
export const Title = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.card};
    color: ${({ theme }) => theme.colors.shape};
    padding-top: 9px;
`;
