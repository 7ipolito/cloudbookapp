import React from "react";
import { Card } from "../../components/Card";
import { options } from "../../utils/options";
import { Container, NameUser, Slider } from "./styles";
import{
    Header,
    Text,
    Emoji,
    Photo,
} from './styles';


export function Dashboard({}){
    return(
        <Container>
            <Header>
                <Text>
                    Bem vindo(a),&nbsp; 
                    <NameUser>
                    Hipólito
                    </NameUser>
                    
                </Text>
                <Emoji>
                🐊
                </Emoji>
                <Photo 
                source={{uri:''}}
                />
            </Header>

            <Slider>
                {options.map(option=>(
                    <Card 
                    key={options.key}
                    title={option.title}
                    icon={option.icon}
                    />
                ))}
                
                
            </Slider>
        </Container>
    )
}

