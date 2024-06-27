import { PhotoIcon } from "../assets/icons/Photo";
import { AnnotationIcon } from "../assets/icons/Annotation";
import { AudioIcon } from "../assets/icons/Audio";
import { StatsIcon } from "../assets/icons/Stats";


export const options = [
    { key: '1', title: 'Photo', icon: PhotoIcon, screen: 'AddImage' },
    {
        key: '2',
        title: 'Annotation',
        icon: AnnotationIcon,
        screen: 'AddAnnotation'
    },
    { key: '3', title: 'Audio', icon: AudioIcon, screen: '' },
    { key: '4', title: 'Stats', icon: StatsIcon, screen: '' }
];

export const emojis = [
    { key: 1, title: 'Apple', emoji: '🍎' },
    { key: 2, title: 'Graduate Man', emoji: '👨🏻‍🎓' },
    { key: 3, title: 'Graduate Woman', emoji: '👩🏻‍🎓' },
    { key: 4, title: 'Pumpkin', emoji: '🎃' },
    { key: 5, title: 'Genie', emoji: '🧞‍♂️' },
    { key: 6, title: 'Cityscape at Dusk', emoji: '🌆' },
    { key: 7, title: 'Lightning Bolt', emoji: '⚡' },
    { key: 8, title: 'Crocodile', emoji: '🐊' },
    { key: 9, title: 'Snowman', emoji: '⛄' },
    { key: 10, title: 'Chopsticks', emoji: '🥢' },
    { key: 11, title: 'Video Game Controller', emoji: '🎮' },
    { key: 12, title: 'Moai Statue', emoji: '🗿' },
    { key: 13, title: 'Statue of Liberty', emoji: '🗽' },
    { key: 14, title: 'Flag of Brazil', emoji: '🇧🇷' },
    { key: 15, title: 'Hot Beverage', emoji: '☕️' },
    { key: 16, title: 'Trident', emoji: '🔱' }
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
