import { LOG_IN_QUERY } from './queries';
import { useQuery } from '@apollo/client';

const useLogIn = () => {
    const { data, loading, error } = useQuery(LOG_IN_QUERY, {
        variables: {
            email: 'TEST',
            password: 'TEST',
        },
    });

    console.log(data);

    if (loading) {
        console.log('..Loading');
    }

    if (error) {
        console.log(error);
    }

    return {
        loading,
        token: data ?? data,
    };
};

export default useLogIn;
