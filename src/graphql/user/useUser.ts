import { useQuery } from '@apollo/client';
import { ELocalStorage } from '../../types/enums';
import { IGetUser } from '../../types/userTypes';
import { USER_DATA } from './query';

const useUser = () => {
    const { data } = useQuery<IGetUser>(USER_DATA, {
        variables: {
            userId: localStorage.getItem(ELocalStorage.UserId),
        },
    });

    return { userData: data?.getUser };
};

export default useUser;
