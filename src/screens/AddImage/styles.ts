import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
export const Container= styled.View`
    flex: 1;
    background-color: ${({theme})=>theme.colors.background};
    width: 100%;
    align-items: center;
    ;

`

export const Header=styled.View`
    width: 100%;
    height: ${RFValue(56)}px;
    margin-top: 68px;
    
    flex-direction: row;
    justify-content:space-between;  
    
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

export const ImageContent= styled.Image`
    width: ${RFValue(325)}px;
    height: ${RFValue(185)}px;
`

export const ChangePhoto=styled.View`
    
`


export const CircleCamera=styled(RectButton)`
    width:${RFValue(50)}px;
    height:${RFValue(50)}px;
    border-radius: 40px;
    background-color: ${({theme})=>theme.colors.primary};

    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left:${RFValue(265)}px;
    margin-top: ${RFValue(150)}px;
    
`

export const TargetCamera=styled(Feather)`
    font-size: ${RFValue(20)}px;
`

export const Footer = styled.View`
    align-items: center;
    margin-top: ${RFValue(190)}px;
    
`

export const BackButton=styled(BorderlessButton)`
    
`

