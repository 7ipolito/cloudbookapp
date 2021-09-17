import React,{useState} from 'react';
import { Button } from '../../components/Button';
import { InputForm } from '../../components/InputForm';
import { Container,
    ImageContent,
    ChangePhoto, 
    CircleCamera,
    TargetCamera, 
    Footer,
} from './styles';
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Header } from '../../components/Header';
import * as ImagePicker from 'react-native-image-picker';
import * as FS from 'react-native-fs';
import uuid from 'react-native-uuid';
import { Alert } from 'react-native';
import { usePath } from '../../hooks/usePath';
import { subjectsImagesPath } from '../../utils/options';

export interface Subject{
    id:string;
    title:string;
    image:string;
    
}

interface FormData{
    
    subject:Subject;
}

const schema = yup.object().shape({
    subject: yup.string().required("Preenchimento obrigatório"),
  });
  

export function AddSubject({route, navigation}:any){

    const [imageURI,setImageURI] = useState('');
    const [imageSelected,setImageSelected] = useState(false);
    const {pathRepository}= usePath();


    const {
        control,
        handleSubmit,
        formState:{errors}
    }= useForm({
        resolver: yupResolver(schema)
    })


    async function handleSave(content:FormData){
        if(imageURI ===  '')
            return Alert.alert('Selecione uma imagem primeiro')
        await createFolderSubject(String(content.subject))

    }

    async function createFolderSubject(nameSubject:string){
        const hash = String(uuid.v4());
        const separator = "|";
        //PENDING
        const nameSubjectHashed=nameSubject+separator+hash;
        const nameSubjectFormatted = nameSubjectHashed.substring(0,nameSubjectHashed.indexOf("|"));

        const exists = await FS.exists(pathRepository+"/"+nameSubjectFormatted);
        if (!exists){
          await FS.mkdir(pathRepository+"/"+nameSubjectHashed).then(async r=>{
              await movePhotoToSubjectsImagesFolder(hash);
            navigation.navigate('Subjects');
          }).catch(err=>{
              console.log(err)
              return Alert.alert("Erro ao criar disciplina")
              
          })
        }else{
            
            return Alert.alert("Erro está pasta já existe")
        }
        
        
    }



    function handleGallery(){
        const options:any = {
            storageOptions: {
              skipBackup: true,
              path: 'images',
            }
        }

        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);
      
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorCode);
            } else {

              setImageSelected(true);
              setImageURI(response.assets![0].uri || '');
            
            }
          });
    }

    async function movePhotoToSubjectsImagesFolder(namePhoto:string){
        await FS.moveFile(imageURI,subjectsImagesPath+"/"+namePhoto+".jpg");
    }
    return(
       

        <Container>
         <Header
            title="Adicionar Disciplina"
            type='addContent'
        />

            <ChangePhoto onPress={handleGallery}>
                    {imageSelected 
                        ?<ImageContent  source={{uri:imageURI}}/>
                        :<ImageContent style={{width:350}} source={require('../../assets/404_photo.png')}/>
                    }
                   {imageSelected &&
                    <CircleCamera onPress={handleGallery}>
                       <TargetCamera name="camera"/>
                   </CircleCamera>
                   } 
            </ChangePhoto>

            <InputForm 
                name='subject'
                control={control}
                icon='pencil'
                maxLength={18}
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