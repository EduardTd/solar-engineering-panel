import { gql } from '@apollo/client';

export const LOCALE = gql`
    query getLocale {
        locale @client
    }
`;
