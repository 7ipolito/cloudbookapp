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
import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { Category, SelectCategory } from '../SelectCategory';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useNavigation} from '@react-navigation/native'
import { Header } from '../../components/Header';
import { Repository, SelectRepository } from '../SelectRepository';
import { options,categories } from '../../utils/options';


export type NavigationProps = {
    navigate:(screen:string) => void;
 }

interface FormData{
    
    repository:Repository;
}

const schema = yup.object().shape({
    repository: yup.string().required("Preenchimento obrigatório"),
  });
  

export function AddRepository(){
    const navigation = useNavigation<NavigationProps>()

    const {
        control,
        handleSubmit,
        formState:{errors}
    }= useForm({
        resolver: yupResolver(schema)
    })


    function handleSave(content:FormData){
      
        
        const repository={
            image:'example.jpg',
            name:content.repository
        }
        console.log(repository)
        
        navigation.navigate('Dashboard');

    }
    return(
       

        <Container>
         <Header
            title="Adicionar Repositório"
            type='addContent'
        />

            <ChangePhoto>
                    <ImageContent source={{uri:'https://c4.wallpaperflare.com/wallpaper/991/886/526/naruto-deidara-naruto-hidan-naruto-itachi-uchiha-kakuzu-naruto-hd-wallpaper-preview.jpg'}}/>
                    <CircleCamera>
                        <TargetCamera name="camera"/>
                    </CircleCamera>
            </ChangePhoto>

            <InputForm 
                name='repository'
                control={control}
                icon='pencil'
                autoCapitalize='sentences'
                error={errors.repository && errors.repository.message}
                placeholder='Nome do repositório'
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