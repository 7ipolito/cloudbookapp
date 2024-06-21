import React from 'react';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import {
    Container,
    ImageContent,
    ChangePhoto,
    CircleCamera,
    TargetCamera,
    Footer
} from './styles';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Alert } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Header } from '../../components/Header';
import { Repository } from '../SelectRepository';
import { cloudbookPath, repositoriesImagesPath } from '../../utils/options';
import * as ImagePicker from 'expo-image-picker';
import uuid from 'react-native-uuid';

export type NavigationProps = {
    navigate: (screen: string) => void;
};

interface FormData {
    repository: Repository;
}

const schema = yup.object().shape({
    repository: yup.string().required('Preenchimento obrigatório')
});

export function AddRepository({ navigation }: any) {
    const [imageURI, setImageURI] = useState('');
    const [imageSelected, setImageSelected] = useState(false);

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleSave(content: FormData) {
        if (imageURI === '') {
            return Alert.alert('Selecione uma imagem primeiro');
        }
        console.log('Repositorio criado');
        // await createFolderRepository(String(content.repository))
    }

    // async function createFolderRepository(nameRepository:string){
    //     const hash = String(uuid.v4());
    //     const separator = "|";

    //     //PENDING
    //     const nameRepositoryHashed=nameRepository+separator+hash;
    //     const nameRepositoryFormatted = nameRepositoryHashed.substring(0,nameRepositoryHashed.indexOf("|"));

    //     const exists = await FS.exists(cloudbookPath+"/"+nameRepositoryFormatted);
    //     if (!exists){
    //       await FS.mkdir(cloudbookPath+"/"+nameRepositoryHashed).then(async r=>{
    //           await movePhotoToRepositoriesImagesFolder(hash);
    //         navigation.navigate('Dashboard');
    //       }).catch(err=>{
    //           console.log(err)
    //           return Alert.alert("Erro ao criar repositório")

    //       })
    //     }else{

    //         return Alert.alert("Erro este repositório já existe")
    //     }

    // }

    // async function movePhotoToRepositoriesImagesFolder(namePhoto:string){
    //     await FS.moveFile(imageURI,repositoriesImagesPath+"/"+namePhoto+".jpg");
    // }

    const handleGallery = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            quality: 1
        });

        if (result.cancelled) {
            console.log(result);
        } else {
            setImageSelected(true);
            setImageURI(result!.uri || '');
        }
    };

    return (
        <Container>
            <Header title="Adicionar Repositório" type="addContent" />

            <ChangePhoto onPress={handleGallery}>
                {imageSelected ? (
                    <ImageContent source={{ uri: imageURI }} />
                ) : (
                    <ImageContent
                        style={{ width: 350 }}
                        source={require('../../assets/404_photo.png')}
                    />
                )}
                {imageSelected && (
                    <CircleCamera onPress={handleGallery}>
                        <TargetCamera name="camera" />
                    </CircleCamera>
                )}
            </ChangePhoto>

            <InputForm
                name="repository"
                control={control}
                icon="pencil"
                maxLength={18}
                autoCapitalize="sentences"
                error={errors.repository && errors.repository.message}
                placeholder="Nome do repositório"
                placeholderTextColor="#666360"
            />

            <Footer>
                <Button title="Salvar" onPress={handleSubmit(handleSave)} />
            </Footer>
        </Container>
    );
}
