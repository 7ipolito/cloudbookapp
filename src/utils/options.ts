import { PhotoIcon } from "../assets/icons/Photo";
import { AnnotationIcon } from "../assets/icons/Annotation";
import { AudioIcon } from "../assets/icons/Audio";
import { StatsIcon } from "../assets/icons/Stats";


export const options = [
    { key: '1', title: 'Foto', icon: PhotoIcon, screen: 'AddImage' },
    {
        key: '2',
        title: 'Anotação',
        icon: AnnotationIcon,
        screen: 'AddAnnotation'
    },
    { key: '3', title: 'Áudio', icon: AudioIcon, screen: '' },
    { key: '4', title: 'Estatísticas', icon: StatsIcon, screen: '' }
];

export const emojis = [
    { key: 1, title: 'Maçã', emoji: '🍎' },
    { key: 2, title: 'Formando', emoji: '👨🏻‍🎓' },
    { key: 3, title: 'Formanda', emoji: '👩🏻‍🎓' },
    { key: 4, title: 'Ábobora', emoji: '🎃' },
    { key: 5, title: 'Aladin', emoji: '🧞‍♂️' },
    { key: 6, title: 'Lo-fi', emoji: '🌆' },
    { key: 7, title: 'Raio', emoji: '⚡' },
    { key: 8, title: 'Jacaré', emoji: '🐊' },
    { key: 9, title: 'Boneco de neve', emoji: '⛄' },
    { key: 10, title: 'Hashi Japonês', emoji: '🥢' },
    { key: 11, title: 'Controle Video game', emoji: '🎮' },
    { key: 12, title: 'Estátua do Imalaia', emoji: '🗿' },
    { key: 13, title: 'Estátua da Liberdade', emoji: '🗽' },
    { key: 14, title: 'Bandeira do Brasil', emoji: '🇧🇷' },
    { key: 15, title: 'Café', emoji: '☕️' },
    { key: 16, title: 'Tridente Mitogia grega', emoji: '🔱' }
];

export const categories = [
    { key: '1', title: 'Matématica', emoji: '🍎' },
    { key: '2', title: 'Química', emoji: '⚡' },
    { key: '3', title: 'Poemas', emoji: '🐊' },
    { key: '4', title: 'Escola das artes', emoji: '⛄' }
];

export const cloudbookPath = '/storage/emulated/0/Cloudbook';
export const imagesPath = '/storage/emulated/0/Cloudbook/images';
export const repositoriesImagesPath =
    '/storage/emulated/0/Cloudbook/images/repositories';
export const subjectsImagesPath =
    '/storage/emulated/0/Cloudbook/images/subjects';

export const imagesGetRepositoriesPath =
    'file:///storage/emulated/0/Cloudbook/images/repositories';
