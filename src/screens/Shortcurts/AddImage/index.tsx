import React from 'react';
import { Button } from '../../../components/Button';
import { Input } from '../../../components/Forms/Input';
import { InputForm } from '../../../components/InputForm';
import { SelectButton } from '../../../components/SelectButton';
import { IconExit } from '../../Profile/styles';
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
import { Category, SelectCategory } from '../../SelectCategory';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {useNavigation} from '@react-navigation/native'
import { Header } from '../../../components/Header';
import { SelectRepository } from '../../SelectRepository';
import { options,categories } from '../../../utils/options';


export type NavigationProps = {
    navigate:(screen:string, options?:any) => void;
 }

interface FormData{
    subject:string;
    category:Category;
}

const schema = yup.object().shape({
    subject: yup.string().required("Preenchimento obrigatório"),
  });
  

export function AddImage({navigation}:any){

    const[category,setCategory]=useState({
        key:'category',
        title:'Selecione a Categoria',
    })

    const[repository,setRepository]=useState({
        id:'repository',
        title:'Selecione o Repositório',
        image:''
    })

    const [categoryModalOpen,setCategoryModalOpen]=useState(false);
    const [repositoryModalOpen,setRepositoryModalOpen]=useState(false);

    const {
        control,
        handleSubmit,
        formState:{errors}
    }= useForm({
        resolver: yupResolver(schema)
    })

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true);
    }

    function handleCloseSelectRepositoryModal(){
        setRepositoryModalOpen(false);
    }

    function handleOpenSelectRepositoryModal(){
        setRepositoryModalOpen(true);
    }

    function handleSave(content:FormData){
        if(category.key === 'category')
        return Alert.alert('Selecione uma categoria')

        const data={
            subject:content.subject,
            category:category.title
        }

        console.log(data)
        navigation.navigate('Dashboard');

    }
    return(
       

        <Container>
         <Header
            title="Adicionar Foto"
            icon={options[0].icon}
        />

            <ChangePhoto>
                    <ImageContent source={{uri:'https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711'}}/>
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
                placeholder='Digite o assunto'
                placeholderTextColor='#666360'
            />

            <SelectButton 
                title={repository.title}
                onPress={handleOpenSelectRepositoryModal}
            />

            <SelectButton 
                title={category.title}
                onPress={handleOpenSelectCategoryModal}
            />

           

            <Footer>
                <Button 
                title='Salvar'
                    onPress={handleSubmit(handleSave)}
                 />
            </Footer>

            <Modal
                statusBarTranslucent
                animationType={'slide'}
                visible={categoryModalOpen}
            >
                    <SelectCategory
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                    />
             </Modal>

             <Modal
                statusBarTranslucent
                animationType={'slide'}
                visible={repositoryModalOpen}
            >
                    <SelectRepository
                        repository={repository}
                        setRepository={setRepository}
                        closeSelectRepository={handleCloseSelectRepositoryModal}
                    />
             </Modal>
            
        </Container>
    )
}