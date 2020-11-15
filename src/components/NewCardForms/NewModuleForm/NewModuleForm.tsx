import React, { FunctionComponent, useContext } from 'react';
import { Form, Formik } from 'formik';
import { ModalContext } from '../../../context/ModalContext';
import { TAddNewModule } from '../../../types/formValues';
import { ECardType, ELocalStorage } from '../../../types/enums';
import moduleCardSchema from './moduleCardSchema';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import scss from './styles/newModuleForm.module.scss';
import useCard from '../../../graphql/calculationCards/useCard';

const NewModuleForm: FunctionComponent = () => {
    const { closeModal } = useContext(ModalContext);
    const { addModuleCard } = useCard();
    const initialValues = {
        moduleName: '',
        savePreset: '',
        moduleType: '',
        moduleLayers: '',
        width: '',
        height: '',
        thickness: '',
        glassThickness: '',
        cellsAlongWidth: '',
        cellsAlongHeight: '',
        bifaciality: '',
        bypassDiodes: '',
    };

    const addNewCardHandler = (values: TAddNewModule) => {
        const newCardData = {
            title: values.moduleName,
            description: [],
            status: ECardType.Inactive,
            additionalData: values,
        };

        addModuleCard({
            variables: {
                userId: localStorage.getItem(ELocalStorage.UserId) || '',
                cardData: newCardData,
            },
        });
        closeModal();
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={addNewCardHandler}
            validationSchema={moduleCardSchema}
        >
            {({ errors, touched }) => (
                <Form className={scss.formAddNew}>
                    <LeftColumn errors={errors} touched={touched} />
                    <RightColumn errors={errors} touched={touched} />
                </Form>
            )}
        </Formik>
    );
};

export default NewModuleForm;
