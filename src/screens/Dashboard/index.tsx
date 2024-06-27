import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, LogBox, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { FabButton } from '../../components/FabButton';
import { Repository, RepositoryProps } from '../../components/Repository';
import {
    cloudbookPath,
    emojis,
    options,
    repositoriesImagesPath
} from '../../utils/options';
import {
    Container,
    NameUser,
    PhotoButton,
    Slider,
    Cards,
    Title,
    LoadContainer,
    EmojiButton,
    TextNotRepository,
    WhithoutRepositoryContent
} from './styles';
import uuid from 'react-native-uuid';
import { Entypo } from '@expo/vector-icons';

import {
    Header,
    Text,
    Emoji,
    Photo,
    Repositories,
    RepositoryList
} from './styles';
import { usePath } from '../../hooks/usePath';
import theme from '../../global/theme';
import { Card } from '../../components/Card';
import { useAuth } from '../../hooks/useAuth';

export interface DataListProps extends RepositoryProps {
    id: string;
}

export function Dashboard({ navigation }: any) {

    
    const {user} = useAuth()
    const [imageUser, setImageUser] = useState('');

    //Utilizando Hook
    const { setTitleRepository, setPathRepository, setImagePathTabRepository } =
        usePath();

    const [repositories, setRepositories] = useState<DataListProps[]>([]);
    const [emoji, setEmoji] = useState(emojis.find(e=>e.key==user?.emoji));
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Verifica se userId está disponível
        if (user?.id !== null) {
            setIsLoading(false);
        }
        setEmoji(emojis.find(e=>e.key==user?.emoji))
    }, [user]);

    function handleAddImage() {
        navigation.navigate('AddImage');
    }

    function handleAddRepository() {
        navigation.navigate('AddRepository');
    }

    function handleChangeProfile() {
        navigation.navigate('Profile');
    }

    function handleNavigate(nameScreen: string) {
        return Alert.alert('Functionality not implemented');
    }

    function handleGoSubjects(
        pathRepository: string,
        title: string,
        imageRepository: string
    ) {
        setTitleRepository(title);
        setImagePathTabRepository(imageRepository);
        setPathRepository(pathRepository);
        navigation.navigate('Subjects');
    }

    // function handleDeleteRepository(path: string, title: string) {
    //     return Alert.alert(
    //         'Deletar ' + title,
    //         'Tem certeza que deseja deletar este repósitorio ?',
    //         [
    //             {
    //                 text: 'Deletar',
    //                 onPress: () => {
    //                     navigation.navigate('AddImageInContent');
    //                 }
    //             },
    //             {
    //                 text: 'Cancelar',
    //                 onPress: () => {}
    //             }
    //         ]
    //     );
    // }

    // async function listRepositories() {
    //     const folders: any = [];

    //     const repositories: DataListProps[] = [];
    //     folders.map(
    //         async (folder: {
    //             name: string;
    //             mtime: number | Date | undefined;
    //             path: any;
    //         }) => {
    //             const nameImageFormatted = folder.name.substring(
    //                 folder.name.indexOf('|') + 1
    //             );
    //             const nameRepositoryFormatted = folder.name.substring(
    //                 0,
    //                 folder.name.indexOf('|')
    //             );

    //             const dirItens = [];
    //             const countSubjects = dirItens.length;

    //             if (folder.name != 'images') {
    //                 repositories.push({
    //                     id: String(uuid.v4()),
    //                     date: Intl.DateTimeFormat('pt-BR', {
    //                         day: '2-digit',
    //                         month: 'narrow',
    //                         year: 'numeric'
    //                     }).format(folder.mtime),
    //                     image:
    //                         'file://' +
    //                         repositoriesImagesPath +
    //                         '/' +
    //                         nameImageFormatted +
    //                         '.jpg',
    //                     number_subjects: countSubjects,
    //                     title: nameRepositoryFormatted,
    //                     pathRepository: folder.path
    //                 });
    //                 setRepositories(repositories);
    //             }
    //         }
    //     );

    //     setIsLoading(false);
    // }

    useFocusEffect(
        useCallback(() => {
            LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
            // getData();
            // listRepositories();
        }, [])
    );

    return (
        <Container>
            {isLoading == false ? (
                <ScrollView>
                    <Header>
                        <Text>
                           Welcome,{'\n'}
                            <NameUser>{user?.name}</NameUser>
                        </Text>
                        <EmojiButton>
                            <Emoji>{emoji?.emoji}</Emoji>
                        </EmojiButton>

                        <PhotoButton onPress={handleChangeProfile}>
                            {user?.photo? (
                                 <Photo source={{ uri: user?.photo }} />
                               
                            ) : (
                                <Photo
                                    source={require('../../assets/404_profile.png')}
                                />
                            )}
                        </PhotoButton>
                    </Header>
                    <Cards>
                        <Slider>
                            {options.map((option) => (
                                <Card
                                    onPress={() =>
                                        handleNavigate(option.screen)
                                    }
                                    key={option.key}
                                    title={option.title}
                                    icon={option.icon}
                                />
                            ))}
                        </Slider>
                    </Cards>

                    {repositories[0] && <Title>Repositórios</Title>}
                    {repositories[0] ? (
                        <Repositories>
                            <RepositoryList
                                data={repositories}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <Repository
                                        onPress={() =>
                                            handleGoSubjects(
                                                item.pathRepository,
                                                item.title,
                                                item.image
                                            )
                                        }
                                        data={item}
                                    />
                                )}
                            />
                        </Repositories>
                    ) : (
                        <WhithoutRepositoryContent>
                            <Entypo
                                name="folder"
                                size={45}
                                color={theme.colors.primary}
                            />
                            <TextNotRepository>
                            There are no repositories
                            </TextNotRepository>
                        </WhithoutRepositoryContent>
                    )}
                </ScrollView>
            ) : (
                <LoadContainer>
                    <ActivityIndicator
                        size="large"
                        color={theme.colors.shape}
                    />
                </LoadContainer>
            )}
                <FabButton
                    icon="addfolder"
                    type="addRepository"
                    onPress={handleAddRepository}
                />
          
        </Container>
    );
}
