import { TSubmitValues } from '../components/LogInForm/useLogIn';

const singIn = (values: TSubmitValues) => {
    return new Promise<string>((resolve, reject) => {
        setTimeout(() => {
            const validEmail = 'TEST';
            const validPassword = 'TEST';
            if (values.email === validEmail && values.password === validPassword) {
                resolve('token string');

                return;
            }

            reject("Can't login. Probably email or password is incorrect");
        }, 300);
    });
};

export default singIn;
