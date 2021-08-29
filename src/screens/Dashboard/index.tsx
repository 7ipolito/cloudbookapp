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
                source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQEmxvqSNl565Q/profile-displayphoto-shrink_800_800/0/1629309995504?e=1635379200&v=beta&t=jFX1GhKjO54e5-YQs_l5MQ00bmMXH6ECT-akxnolf0k'}}
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

