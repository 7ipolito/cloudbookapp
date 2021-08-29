
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex:1%;
    background-color: ${({theme})=>theme.colors.background};
`

    export const Header= styled.View`
    width: 100%;
    height: ${RFValue(56)}px;
    margin-top: 68px;
    
    flex-direction: row;
    justify-content: space-between;
    `
    export const Text= styled.Text`
        width: ${RFValue(150)}px;
        margin-left: 24px;
        font-size: ${RFValue(20)}px;
        color:${({theme})=>theme.colors.shape};
        font-family: ${({theme})=>theme.fonts.medium};
    `
    export const Emoji= styled.Text`
        
        font-size: ${RFValue(35)}px;
        
    `
    export const Photo= styled.Image`
        width:${RFValue(56)}px;
        height:${RFValue(56)}px;
        border-radius: 30px;
        margin-right: 24px;
    `

    export const NameUser= styled.Text`
        font-family: ${({theme})=>theme.fonts.bold};
        color:${({theme})=>theme.colors.primary};

    `


    export const Slider= styled.ScrollView.attrs({
        horizontal:true,
        showsHorizontalScrollIndicator:false,
        contentContainerStyle:{paddingHorizontal:10}
    })`
       flex-direction: row;
       width: 100%;
       
    `