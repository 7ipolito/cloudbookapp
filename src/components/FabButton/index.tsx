import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Container, IconRepository,IconContent, IconSubject } from './styles';

interface Props extends RectButtonProps{
    icon:string;
    type: 'addRepository' | 'addSubject' | 'addFile';
}
export function FabButton({
    icon,
    type,
    ...rest
    
}:Props){
    return(
        <Container {...rest}>
            {type==='addRepository' &&
                <IconRepository name={icon}/>
            }
            {type==='addSubject' &&
                <IconSubject name={icon}/>
            }
             {type==='addFile' &&
                <IconContent name={icon}/>
            }
            
        </Container>
    )
}