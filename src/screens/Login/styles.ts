import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1%;
    
    background-color:${({theme})=> theme.colors.background} ;
`
export const Title = styled.Text`
    font-size: ${RFValue(40)}px;
    font-weight: bold;
`