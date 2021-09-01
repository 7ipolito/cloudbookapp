import { AntDesign } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";;


export const Container=styled(RectButton)`
    width:${RFValue(65)}px;
    height:${RFValue(65)}px;
    border-radius: 40px;
    background-color: ${({theme})=>theme.colors.primary};

    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left:${RFValue(280)}px;
    margin-top: ${RFValue(650)}px;
    
`

export const Icon=styled(AntDesign)`
    font-size: ${RFValue(24)}px;
`