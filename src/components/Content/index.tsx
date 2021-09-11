import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container,
        SubjectPhoto,
        Annotation,  
        ImageBackground ,
        ContentViewPhoto, 
        ContentViewAnnotation,
        TitlePhoto,
        InfoPhoto,
        DatePhoto,
        SubjectAnnotation,
        TitleAnnotation,
        DateAnnotation,
        InfoAnnotation
} from './styles';

export interface ContentProps{
    title:string;
    subject:string;
    type: 'photo' | 'annotation';
    image?:string;
    text?:string;
    date:string;
}

interface Props extends RectButtonProps{
    data:ContentProps;
}


export function Content({
   data,
   ...rest
}:Props){
    return(
        <Container {...rest}>
            {data.type==='photo'&&(
                <>
                <ImageBackground
                    source={{uri:data.image}}
                >

            <ContentViewPhoto>

                <TitlePhoto>
                    {data.title}
                </TitlePhoto>
                <InfoPhoto>
                    <SubjectPhoto>
                        {data.subject}
                    </SubjectPhoto>

                    <DatePhoto>
                        {data.date}
                    </DatePhoto>
                </InfoPhoto>
            </ContentViewPhoto>
            
            </ImageBackground>
                </>
            )}

            {data.type==='annotation'&&(
                <>
                <ContentViewAnnotation>
                    <TitleAnnotation>
                        {data.title}
                    </TitleAnnotation>

                    <Annotation>
                        {data.text}
                    </Annotation>
                    <InfoAnnotation>
                        <SubjectAnnotation>
                            {data.subject}
                        </SubjectAnnotation>

                        <DateAnnotation>
                            {data.date}
                        </DateAnnotation>
                    </InfoAnnotation>
                </ContentViewAnnotation>
                </>
            )}
            
        </Container>
    )
}