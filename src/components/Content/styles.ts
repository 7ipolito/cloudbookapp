import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled(RectButton)`
    width: ${RFValue(340)}px;
    height: ${RFValue(234)}px;
    background-color: ${({theme})=>theme.colors.title};

    
    border-radius: 7px;
    margin-bottom: 16px;
    justify-content: center;
    ;
`
export const ImageBackground = styled.ImageBackground.attrs({
    imageStyle:{ borderRadius: 7}

})`
    
    height: 100%;
    
`

export const ContentViewPhoto = styled.View`
    
    justify-content:flex-end;
    margin-top: 180px;
    
    background-color: black;
    padding: 0 24px;
    
    
    
`

export const ContentViewAnnotation = styled.View`
    padding: 0 16px;
    
    
`

export const SubjectPhoto = styled.Text`
    font-family: ${({theme})=>theme.fonts.card};
    font-size: ${RFValue(13)}px;
    
    color:${({theme})=>theme.colors.primary};
    margin-bottom: 10px; 
`
export const SubjectAnnotation = styled.Text`
    font-family: ${({theme})=>theme.fonts.card};
    font-size: ${RFValue(13)}px;
    color:${({theme})=>theme.colors.primary};
    margin-bottom: 10px; 
`

export const TitlePhoto = styled.Text`
    font-family: ${({theme})=>theme.fonts.card};
    text-align: left;
    color: 'blue';
               
    
    color:${({theme})=>theme.colors.shape};
    font-size: ${RFValue(28)}px;
    
`
export const TitleAnnotation = styled.Text`
    font-family: ${({theme})=>theme.fonts.card};
    text-align: left;
    color:${({theme})=>theme.colors.shape};
    font-size: ${RFValue(28)}px;
    
`

export const Annotation = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    color:${({theme})=>theme.colors.shape};
    text-align: left;
    margin-bottom: 8px;

` 
export const DatePhoto = styled.Text`
    font-family: ${({theme})=>theme.fonts.card};
    color:${({theme})=>theme.colors.shape};
    
` 
export const DateAnnotation = styled.Text`
    font-family: ${({theme})=>theme.fonts.card};
    color:${({theme})=>theme.colors.shape};
    
    
` 
export const InfoPhoto = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const InfoAnnotation = styled.View`
    flex-direction: row;
    justify-content: space-between;
`

