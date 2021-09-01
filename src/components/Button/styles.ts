import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
export const Container = styled(RectButton)`
    width: ${RFValue(295)}px;
    height:${RFValue(50)}px;
    border-radius: 10px;
    background-color: ${({theme})=> theme.colors.primary};

    align-items: center;
    justify-content: center;
    color: ${({theme})=> theme.colors.title};

`


export const Title = styled.Text`
    font-family: ${({theme})=> theme.fonts.medium};
    font-size: ${RFValue(14)}px;
    color: ${({theme})=> theme.colors.title};
`;