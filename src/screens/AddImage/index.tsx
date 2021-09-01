import React from 'react';
import { Button } from '../../components/Button';
import { Input } from '../../components/Forms/Input';
import { InputForm } from '../../components/InputForm';
import { SelectButton } from '../../components/SelectButton';
import { IconExit } from '../Profile/styles';
import { Container,
    Header,
    ImageContent,
    IconBack, 
    Title,
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


export type NavigationProps = {
    navigate:(screen:string) => void;
 }

interface FormData{
    subject:string;
    category:Category;
}

const schema = yup.object().shape({
    subject: yup.string().required("Preenchimento obrigatório"),
  });
  

export function AddImage(){
    const navigation = useNavigation<NavigationProps>()

    const[category,setCategory]=useState({
        key:'category',
        title:'Categoria',
        emoji:''
    })

    const [categoryModalOpen,setCategoryModalOpen]=useState(false);

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
            <Header>
                <IconBack name='md-arrow-back'/>
                <Title>Adicionar Imagem</Title>
                <BackButton>
                    <IconExit name=''/>
                </BackButton>
            </Header>

            <ChangePhoto>
                    <ImageContent source={{uri:'https://www.rederpg.com.br/wp/wp-content/uploads/2018/03/teseu-vs-minotauro-2.jpg'}}/>
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
                title={category.title}
                emoji={category.emoji}
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
            
        </Container>
    )
}