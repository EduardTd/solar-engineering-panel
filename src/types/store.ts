export type Locale = 'en_US' | 'de_DE';

export type AppState = Readonly<{
    locale: Locale;
    token: string | null;
}>;

export type Action = {
    type: string;
    payload: any;
};
