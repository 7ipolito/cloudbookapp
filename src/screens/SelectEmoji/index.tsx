import React from 'react';
import { StatusBar } from 'react-native';

import { FlatList } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';
import { emojis } from '../../utils/options';
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

interface Emoji {
    key: string;
    title: string;
    emoji: string;
}

interface Props {
    emoji: Emoji;
    setEmoji: (emoji: Emoji) => void;
    closeSelectEmoji: () => void;
}
export function SelectEmoji({ emoji, setEmoji, closeSelectEmoji }: Props) {
    function handleEmojiSelect(emoji: Emoji) {
        setEmoji(emoji);
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
                    <Title>Emoji</Title>
                </Header>

                <FlatList
                    data={emojis}
                    style={{ flex: 1, width: '100%' }}
                    keyExtractor={(item) => item.key}
                    renderItem={({ item }) => (
                        <Category
                            onPress={() => handleEmojiSelect(item)}
                            isActive={emoji.key === item.key}
                        >
                            <Name>
                                {item.emoji} {item.title}
                            </Name>
                        </Category>
                    )}
                    ItemSeparatorComponent={() => <Separator />}
                />

                <Footer>
                    <Button
                        title="Selecionar Emoji"
                        onPress={closeSelectEmoji}
                    />
                </Footer>
            </Container>
        </>
    );
}
