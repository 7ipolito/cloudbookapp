import React from 'react';
import { Container,Footer} from './styles';
import {useForm} from 'react-hook-form'
import { Alert } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { InputForm } from '../../components/InputForm';
import {TextArea} from '../../components/TextArea';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { usePath } from '../../hooks/usePath';

interface FormData{
    title:string;
    text:string;
}

const schema = yup.object().shape({
    title: yup.string().required("Preenchimento obrigatório"),
    text: yup.string().required("Preenchimento obrigatório"),
  });
  

export function AddAnnotationInContent({navigation}:any){
    const {pathSubject,imageTabSubject} = usePath()
   
    const {
        control,
        handleSubmit,
        formState:{errors}
    }= useForm({
        resolver: yupResolver(schema)
    })


    async function handleSave(content:FormData){
        await moveAnnotationToSubject(content.title,content.text);


    }

    async function moveAnnotationToSubject(nameAnnotation:string,text:string){

        // const exists = await FS.exists(pathSubject+"/"+nameAnnotation+".txt");
        // if (!exists){
        //   FS.writeFile(pathSubject+'/'+nameAnnotation+'.txt',text).then(r=>{
        //     navigation.navigate("Contents")
        //   }).catch(err=>{
        //       console.log(err)
        //       return Alert.alert("Não foi possível criar o conteúdo")
        //   })
  
        // }else{
            
        //     return Alert.alert("Erro este conteúdo já existe")
        // }   
    }
    return(
       

        <Container>
         <Header
            title="Adicionar Anotação"
            type="addContent"
            
        />

            <InputForm 
                name='title'
                control={control}
                icon='pencil'
                maxLength={20}
                autoCapitalize='sentences'
                error={errors.title && errors.title.message}
                placeholder='Informe o assunto'
                placeholderTextColor='#666360'
            />

          <TextArea
            name="text"
            control={control}
            error={errors.text && errors.text.message}
            multiline
            autoCapitalize='sentences'
            placeholder="Digite a anotação(Max. 350 caracteres)"
            placeholderTextColor='#666360'
            maxLength={350}
            numberOfLines={4}
           
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