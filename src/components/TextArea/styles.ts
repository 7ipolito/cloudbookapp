
import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`

`
export const TextAreaView =styled(TextInput)`
    
       width:${RFValue(290)}px;
       height:${RFValue(200)}px;
       background-color:${({theme})=>theme.colors.input};
       color:${({theme})=>theme.colors.shape};
       border-radius:8px;
       font-family: ${({theme})=> theme.fonts.medium};
       font-size: ${RFValue(14)}px;
       margin-right: 4px;
       text-align: center;
       margin-bottom: 16px;
   `

export const Error= styled.Text`
    font-size: ${RFValue(14)}px;

    font-family:${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.attention};
    margin: 0 7px;

`