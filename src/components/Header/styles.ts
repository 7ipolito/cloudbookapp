import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
export const Container=styled.View`
    width: 100%;
    height: ${RFValue(76)}px;
    margin-top: 46px;
    
    flex-direction: row;
    justify-content:space-between;  
    align-items: center;
    margin-bottom: 14px;
    
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
export const BackButton=styled(BorderlessButton)`
    
`
export const ImageButton=styled(RectButton)`
    
`

export const ImageHeader= styled.Image`
   width: ${RFValue(56)}px;
   height: ${RFValue(56)}px;
   margin-top: 8px;   
   margin-right: 10px;
   border-radius: 40px;
   
`


