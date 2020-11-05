export type TAddNewModule = {
    moduleName: string;
    password: string;
    savePreset: string;
    moduleType: string;
    moduleLayers: string;
    width: string;
    height: string;
    thickness: string;
    glassThickness: string;
    cellsAlongWidth: string;
    cellsAlongHeight: string;
    bifaciality: string;
    bypassDiodes: string;
};

export type TCardSelectField = {
    label: string;
    fieldId: string;
    fieldName: string;
    options: TSelectOption[];
};

export type TSelectOption = {
    name: string;
    value: string;
};
