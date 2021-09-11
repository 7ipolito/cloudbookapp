import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Forms/Input';
import { InputForm } from '../../components/InputForm';
import { SelectButton } from '../../components/SelectButton';
import { IconExit } from '../Profile/styles';
import { Container,
    ImageContent,
    ChangePhoto, 
    CircleCamera,
    TargetCamera, 
    Footer,
    BackButton } from './styles';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useNavigation} from '@react-navigation/native'
import { Header } from '../../components/Header';
import { Repository, SelectRepository } from '../SelectRepository';
import { options,categories } from '../../utils/options';


export interface Subject{
    id:string;
    title:string;
    image:string;
    
}

export type NavigationProps = {
    navigate:(screen:string) => void;
 }

interface FormData{
    
    subject:Subject;
}

const schema = yup.object().shape({
    subject: yup.string().required("Preenchimento obrigatório"),
  });
  

export function AddSubject(){
    const navigation = useNavigation<NavigationProps>()

    const {
        control,
        handleSubmit,
        formState:{errors}
    }= useForm({
        resolver: yupResolver(schema)
    })


    function handleSave(content:FormData){
      
        
        const subject={
            image:'example.jpg',
            name:content.subject
        }
        console.log(subject)
        
        navigation.navigate('Subjects');

    }
    return(
       

        <Container>
         <Header
            title="Adicionar Disciplina"
            type='addContent'
        />

            <ChangePhoto>
                    <ImageContent source={{uri:'https://www.oficinadanet.com.br/imagens/post/28270/suits.jpg'}}/>
                    <CircleCamera>
                        <TargetCamera name="camera"/>
                    </CircleCamera>
            </ChangePhoto>

            <InputForm 
                name='subject'
                control={control}
                icon='pencil'
                autoCapitalize='sentences'
                error={errors.subject && errors.subject.message}
                placeholder='Nome da disciplina'
                placeholderTextColor='#666360'
            />

           

            <Footer>
                <Button 
                title='Salvar'
                    onPress={handleSubmit(handleSave)}
                 />
            </Footer>

          
            
        </Container>
    )
}