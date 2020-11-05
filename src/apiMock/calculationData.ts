import { TCalculationData } from '../types/cardsTypes';

const calculationData: TCalculationData = {
    plants: [
        {
            title: 'Plant Version 1',
            description: ['Preliminary', 'View factors'],
            status: 'inactive',
            additionalData: {},
        },
        {
            title: 'Plant Version 2',
            description: ['Detailed', 'Ray tracing'],
            status: 'inactive',
            additionalData: {},
        },
        {
            title: 'Plant GM file',
            description: ['Detailed', 'Ray tracing'],
            status: 'inactive',
            additionalData: {},
        },
    ],
    modules: [
        {
            title: 'Mitsubishi PV-MLU255HC',
            description: [],
            status: 'inactive',
            additionalData: {},
        },
        {
            title: 'SEP 300W',
            description: [],
            status: 'inactive',
            additionalData: {},
        },
    ],
    inverters: [
        {
            title: 'Inverter 1',
            description: ['Missing details'],
            status: 'disabled',
            additionalData: {},
        },
        {
            title: 'Inverter 2',
            description: ['Missing details'],
            status: 'disabled',
            additionalData: {},
        },
        {
            title: 'SMA Sunny Boy 5.0',
            description: [],
            status: 'inactive',
            additionalData: {},
        },
        {
            title: 'GoodWe GW15KN-DT',
            description: [],
            status: 'inactive',
            additionalData: {},
        },
        {
            title: 'ABB UNO-DM-4.0-TL-PLUS',
            description: [],
            status: 'inactive',
            additionalData: {},
        },
    ],
};

export default calculationData;
