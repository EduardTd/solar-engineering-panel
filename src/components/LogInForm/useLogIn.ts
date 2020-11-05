import { useDispatch, useSelector } from 'react-redux';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getToken } from '../../store/app/selectors';
import { ENoticeType, ESessionStorageKey } from '../../types/enums';
import { NoticeContext } from '../../context/NoticeContext';
import routes from '../../routes/routes';
import singIn from '../../apiMock/signIn';
import { setUserToken } from '../../store/app/actions';

export type TSubmitValues = {
    email: string;
    password: string;
};

const useLogIn = () => {
    const dispatch = useDispatch();
    const token = useSelector(getToken);
    const [loggedIn, setLoggedIn] = useState(
        Boolean(sessionStorage.getItem(ESessionStorageKey.Token)),
    );
    const { replace } = useHistory();
    const { provideNoticeData } = useContext(NoticeContext);

    useEffect(() => {
        if (token && !loggedIn) {
            setLoggedIn(true);
            replace(routes.summary);
        }
    }, [token]);

    const onSubmit = (values: TSubmitValues) => {
        singIn(values)
            .then((response: string) => {
                sessionStorage.setItem(ESessionStorageKey.Token, response);
                dispatch(setUserToken(response));
                provideNoticeData('Login successful', ENoticeType.Success);
            })
            .catch((error) => {
                provideNoticeData(error, ENoticeType.Error);
            });
    };

    return { onSubmit };
};

export default useLogIn;
