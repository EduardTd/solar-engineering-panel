import { TCalculationData } from '../types/cardsTypes';
import { ECardType } from '../types/enums';

const calculationData: TCalculationData = {
    plants: [
        {
            title: 'Plant Version 1',
            description: ['Preliminary', 'View factors'],
            status: ECardType.Inactive,
            additionalData: {},
        },
        {
            title: 'Plant Version 2',
            description: ['Detailed', 'Ray tracing'],
            status: ECardType.Inactive,
            additionalData: {},
        },
        {
            title: 'Plant GM file',
            description: ['Detailed', 'Ray tracing'],
            status: ECardType.Inactive,
            additionalData: {},
        },
    ],
    modules: [
        {
            title: 'Mitsubishi PV-MLU255HC',
            description: [],
            status: ECardType.Inactive,
            additionalData: {},
        },
        {
            title: 'SEP 300W',
            description: [],
            status: ECardType.Inactive,
            additionalData: {},
        },
    ],
    inverters: [
        {
            title: 'Inverter 1',
            description: ['Missing details'],
            status: ECardType.Disabled,
            additionalData: {},
        },
        {
            title: 'Inverter 2',
            description: ['Missing details'],
            status: ECardType.Disabled,
            additionalData: {},
        },
        {
            title: 'SMA Sunny Boy 5.0',
            description: [],
            status: ECardType.Inactive,
            additionalData: {},
        },
        {
            title: 'GoodWe GW15KN-DT',
            description: [],
            status: ECardType.Inactive,
            additionalData: {},
        },
        {
            title: 'ABB UNO-DM-4.0-TL-PLUS',
            description: [],
            status: ECardType.Inactive,
            additionalData: {},
        },
    ],
};

export default calculationData;
