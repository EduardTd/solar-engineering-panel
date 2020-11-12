import { gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            success
            message
            data {
                id
                token
            }
        }
    }
`;

export const IS_LOGGED_IN = gql`
    query isUserLoggedIn {
        isLoggedIn @client
    }
`;

export const IS_TOKEN_SAME = gql`
    query isTokenSame($token: String) {
        isTokenSame(token: $token)
    }
`;
