import { gql } from '@apollo/client';

export const LOG_IN_QUERY = gql`
    query USER($email: String!, $password: String!) {
        user(email: $email, password: $password) {
            id
            name
            lastName
            email
            token
        }
    }
`;
