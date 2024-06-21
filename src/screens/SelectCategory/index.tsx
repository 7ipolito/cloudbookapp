import React from 'react';
import { StatusBar } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { categories, emojis } from '../../utils/options';
import {
    Category,
    Container,
    Footer,
    Header,
    Icon,
    Name,
    Separator,
    Title
} from './styles';

export interface Category {
    key: string;
    title: string;
}

interface Props {
    category: Category;
    setCategory: (category: Category) => void;
    closeSelectCategory: () => void;
}
export function SelectCategory({
    category,
    setCategory,
    closeSelectCategory
}: Props) {
    function handleCategorySelect(category: Category) {
        setCategory(category);
    }

    return (
        <>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Container>
                <Header>
                    <Title>Categoria</Title>
                </Header>

                <FlatList
                    data={categories}
                    style={{ flex: 1, width: '100%' }}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Category
                            onPress={() => handleCategorySelect(item)}
                            isActive={category.key === item.key}
                        >
                            <Name>{item.title}</Name>
                        </Category>
                    )}
                    ItemSeparatorComponent={() => <Separator />}
                />

                <Footer>
                    <Button
                        title="Selecionar Categoria"
                        onPress={closeSelectCategory}
                    />
                </Footer>
            </Container>
        </>
    );
}
