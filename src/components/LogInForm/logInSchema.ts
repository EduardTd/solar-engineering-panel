import * as Yup from 'yup';

const logInSchema = Yup.object().shape({
    email: Yup.string().min(2, 'Too Short').max(70, 'Too Long').required('Required'),
    password: Yup.string().min(4, 'Too Short').max(70, 'Too Long').required('Required'),
});

export default logInSchema;
