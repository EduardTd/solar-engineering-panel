import * as Yup from 'yup';

const moduleCardSchema = Yup.object().shape({
    moduleName: Yup.string().required('Required'),
});

export default moduleCardSchema;
