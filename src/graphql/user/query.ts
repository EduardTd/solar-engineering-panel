import { gql } from '@apollo/client';

export const USER_DATA = gql`
    query getUserData($userId: String!) {
        getUser(userId: $userId) {
            id
            name
            lastName
            email
        }
    }
`;
