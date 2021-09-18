import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
export const Container= styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
    width: 100%;
    align-items: center;

`
export const Footer = styled.View`
    align-items: center;
    margin-bottom: ${RFValue(180)}px;
    
`

