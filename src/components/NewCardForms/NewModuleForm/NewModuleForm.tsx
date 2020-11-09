import React, { FunctionComponent, useContext } from 'react';
import { Form, Formik } from 'formik';
import { ModalContext } from '../../../context/ModalContext';
import { CardsContext } from '../../../context/CardsContext';
import { TAddNewModule } from '../../../types/formValues';
import { ECardsColumnType, ECardType } from '../../../types/enums';
import moduleCardSchema from './moduleCardSchema';
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import scss from './styles/newModuleForm.module.scss';

const NewModuleForm: FunctionComponent = () => {
    const { closeModal } = useContext(ModalContext);
    const { cardsState, setCardsState } = useContext(CardsContext);
    const initialValues = {
        moduleName: '',
        password: '',
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
        const newData = { ...cardsState };
        const newCardData = {
            title: values.moduleName,
            description: [],
            status: ECardType.Inactive,
            additionalData: values,
        };
        newData[ECardsColumnType.Modules].unshift(newCardData);

        setCardsState(newData);
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
