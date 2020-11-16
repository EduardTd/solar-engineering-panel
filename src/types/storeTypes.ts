export type Locale = 'en_US' | 'lt_LT';

export type AppState = Readonly<{
    locale: Locale;
}>;

export type Action = {
    type: string;
    payload: any;
};
