import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Alert, ScrollView } from 'react-native';
import { ReadDirItem } from 'react-native-fs';
import { Content, ContentProps } from '../../components/Content';
import { FabButton } from '../../components/FabButton';
import { Header } from '../../components/Header';
import * as FS from 'react-native-fs';
import { Container,Title,ContentsView,ContentList, WhithoutContent, TextNotContent } from './styles';
import uuid from 'react-native-uuid';
import { usePath } from '../../hooks/usePath';
import theme from '../../global/theme';
import { FontAwesome } from '@expo/vector-icons'; 
import ImageView from "react-native-image-viewing";


export interface DataListProps extends ContentProps{
    id: string;
}

interface ImageViewerProps{
    uri:string;
}

export function Contents({navigation}:any){

    const {pathSubject,imageTabSubject,titleSubject}= usePath();
    const [contents,setContents]=useState<DataListProps[]>([]);

    const[openGallery,setOpenGallery]=useState(false);
    const [imageSelectedURI,setImageSelectedURI]=useState<ImageViewerProps[]>([]);

    function handleAddContent(){
        Alert.alert(
            'Cloudbook',
            'Escolha um tipo de conteúdo',
            [
                {
                  text:'Foto 🖼️',
                onPress :()=>{
                        navigation.navigate('AddImageInContent')
                    }
                },
                {
                 text:'Anotação ✏️',
                 onPress :()=>{
                    navigation.navigate('AddAnnotationInContent')
                },
                
                },
                {
                    text:'Cancelar',
                    onPress :()=>{
                       
                   },
                }
            ]
        )
        
    }

    function handleOpenContent(imageURI:string | undefined){
        if(!imageURI){
            return
        }
        
        const imageFormatted=[{
            uri:imageURI
        }]
        
        setImageSelectedURI(imageFormatted)
        setOpenGallery(true)
    }

    async function listContents(){
        const files:ReadDirItem[] = await FS.readDir(pathSubject)
        
        const contents:DataListProps[] = []
        files.map((async file=>{
            
            const nameAnnotationFormatted = file.name.substring(0,file.name.indexOf('.txt'))
            const namePhotoFormatted = file.name.substring(0,file.name.indexOf('.jpg')) 
                                        || file.name.substring(0,file.name.indexOf('.png'));
            if(file.name.endsWith('.jpg') || file.name.endsWith('.png')){
                
                //IMAGEM
                contents.push({
                    id:String(uuid.v4()),
                    date:Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'narrow',
                        year: 'numeric'
                      }).format(file.mtime),
                      
                    image:'file://'+file.path,
                    subject:titleSubject,
                    type:'photo',
                    title:namePhotoFormatted,
                    
                });
            }else if(file.name.endsWith('.txt')){
                //ANOTAÇÃO
                contents.push({
                    id:String(uuid.v4()),
                    date:Intl.DateTimeFormat('pt-BR', {
                        day: '2-digit',
                        month: 'narrow',
                        year: 'numeric'
                      }).format(file.mtime),
                    subject:titleSubject,
                    type:'annotation',
                    text: await FS.readFile(file.path),
                    title:nameAnnotationFormatted,
                    
                });
            }else{
                return Alert.alert("Pasta corrompida")
            }

            setContents(contents);
              
        }))
    }

    useFocusEffect(useCallback(()=>{
        
        listContents();
        
    },[]))
    return(

        <Container>
            
            <Header
                title={titleSubject}
                image={imageTabSubject}
                type='listThings'
                
            />
            <ScrollView>

            {contents[0]&&(<Title>Conteúdos</Title>)}
            {contents[0] ?(
                <ContentsView>

                <ContentList
                    data={contents}
                    keyExtractor={item => item.id}
                    renderItem={({item})=>
                    <Content data={item} onPress={()=>handleOpenContent(item.image)} />
                }
                />
    
                </ContentsView>
            ):(
                <WhithoutContent>
                
                <FontAwesome name="file-photo-o" size={45} color={theme.colors.primary} />
                <TextNotContent>Não há conteúdos</TextNotContent>
                 </WhithoutContent>
            )}
            
            </ScrollView>
            <FabButton
                icon='addfile'
                type='addFile'
                onPress={handleAddContent}
             />
                <ImageView
                    images={imageSelectedURI}
                    imageIndex={0}
                    presentationStyle='overFullScreen'
                    animationType="slide"
                    onLongPress={() => setOpenGallery(false)}
                    visible={openGallery}
                    
                    onRequestClose={() => setOpenGallery(false)}
                />
        </Container>
    )
}