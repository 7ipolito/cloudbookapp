import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton } from "react-native-gesture-handler";
export const Container=styled.View`
    width: 100%;
    height: ${RFValue(56)}px;
    margin-top: 46px;
    
    
    flex-direction: row;
    
    justify-content:space-between;  

    align-items: center;
    margin-bottom: 20px;
    
`
export const Title=styled.Text`
    color:  ${({theme})=>theme.colors.shape};
    font-family:  ${({theme})=>theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    
`

export const IconBack=styled(Ionicons)`
    color:  ${({theme})=>theme.colors.shape};
    font-size: ${RFValue(22)}px;
    padding:0 16px;
    
`
export const ButtonIcon=styled.View`
 background-color: green;
    
`

export const IconScreen=styled.Image`
   width: ${RFValue(50)}px;
   height: ${RFValue(50)}px;
    
   background-color: red;
    
`
export const BackButton=styled(BorderlessButton)`
    align-items: center;
`
export const ImageButton=styled(BorderlessButton)`
    align-items: center;
`

export const ImageHeader= styled.Image`
    width: ${RFValue(56)}px;
   height: ${RFValue(56)}px;
   margin-right: 16px;
   border-radius: 40px;
    
   
`


