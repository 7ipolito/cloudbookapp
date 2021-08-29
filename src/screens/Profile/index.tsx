import React, { useState } from 'react';
import { ChangePhoto, CircleCamera, Container, Footer, IconBack, IconExit } from './styles';
import{
    Header,
    Title,
    Form,
    Photo,
    TargetCamera,
} from './styles'
import { Input } from '../../components/Forms/Input';
import { SelectButton } from '../../components/SelectButton';
import { Modal } from 'react-native';
import { SelectEmoji } from '../SelectEmoji';
import { Button } from '../../components/Button';
export function Profile(){
    const [emoji,setEmoji]=useState({
        key: '5',
        title:'Maçã',
        emoji:'🍎'
    })

    const [emojiModalOpen,setEmojiModalOpen]=useState(false);


    function handleCloseSelectEmojiModal(){
        setEmojiModalOpen(false);
    }

    function handleOpenSelectEmojiModal(){
        setEmojiModalOpen(true);
    }
    return(
        <Container>
            <Header>
                <IconBack name='md-arrow-back'/>
                <Title>Meu Perfil</Title>
                <IconExit name='power'/>
            </Header>

            <Form>
                <ChangePhoto>
                    <Photo source={{uri:'https://media-exp1.licdn.com/dms/image/C4E03AQEmxvqSNl565Q/profile-displayphoto-shrink_800_800/0/1629309995504?e=1635379200&v=beta&t=jFX1GhKjO54e5-YQs_l5MQ00bmMXH6ECT-akxnolf0k'}}/>
                    <CircleCamera>
                        <TargetCamera name="camera"/>
                    </CircleCamera>
                </ChangePhoto>

                <Input
                 icon='person-outline' 
                 value="Allan Hipólito"
                 />
                
                <SelectButton 
                    title={emoji.title}
                    emoji={emoji.emoji}
                    onPress={handleOpenSelectEmojiModal}
                />

                
            </Form>

            
            <Modal
                statusBarTranslucent
                animationType={'slide'}
                visible={emojiModalOpen}
            >
                    <SelectEmoji
                        emoji={emoji}
                        setEmoji={setEmoji}
                        closeSelectEmoji={handleCloseSelectEmojiModal}
                    />
             </Modal>
            <Footer>
                <Button title='Confirmar mudanças' onPress={()=>{}}/>
            </Footer>
        </Container>
    )
}