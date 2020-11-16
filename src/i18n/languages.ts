import { TLanguages } from '../types/languageTypes';
import ltLT from './locales/lt_LT/translation.json';
import enUS from './locales/en_US/translation.json';

export const languages: TLanguages = [
    {
        name: 'EN',
        locale: 'en_US',
    },
    {
        name: 'LT',
        locale: 'lt_LT',
    },
];

export const resources = {
    lt_LT: { translation: ltLT },
    en_US: { translation: enUS },
};
