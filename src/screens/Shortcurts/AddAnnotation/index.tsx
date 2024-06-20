import React from 'react';
import { Button } from '../../../components/Button';
import { InputForm } from '../../../components/InputForm';
import { SelectButton } from '../../../components/SelectButton';
import { Container, Footer } from './styles';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Alert, Modal } from 'react-native';
import { Category, SelectCategory } from '../../SelectCategory';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Header } from '../../../components/Header';
import { SelectRepository } from '../../SelectRepository';
import { TextArea } from '../../../components/TextArea';

interface FormData {
    subject: string;
    category: Category;
}

const schema = yup.object().shape({
    subject: yup.string().required('Preenchimento obrigatório')
});

export function AddAnottation({ navigation }: any) {
    const [category, setCategory] = useState({
        key: 'category',
        title: 'Selecione a Categoria'
    });

    const [repository, setRepository] = useState({
        id: 'repository',
        title: 'Selecione o Repositório',
        image: ''
    });

    const [categoryModalOpen, setCategoryModalOpen] = useState(false);
    const [repositoryModalOpen, setRepositoryModalOpen] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleCloseSelectRepositoryModal() {
        setRepositoryModalOpen(false);
    }

    function handleOpenSelectRepositoryModal() {
        setRepositoryModalOpen(true);
    }

    function handleSave(content: FormData) {
        if (category.key === 'category')
            return Alert.alert('Selecione uma categoria');

        const data = {
            subject: content.subject,
            category: category.title
        };

        navigation.navigate('Dashboard');
    }
    return (
        <Container>
            <Header title="Adicionar Anotação" type="addContent" />

            <InputForm
                name="subject"
                control={control}
                icon="pencil"
                autoCapitalize="sentences"
                error={errors.subject && errors.subject.message}
                placeholder="Informe o assunto"
                placeholderTextColor="#666360"
            />

            <TextArea
                multiline
                placeholder="Informe a anotação"
                control={control}
                name="example"
                maxLength={100}
                numberOfLines={5}
                autoCorrect={true}
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
                <Button title="Salvar" onPress={handleSubmit(handleSave)} />
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
    );
}
