import {saveState} from './localStorage';

const INCREMENT = 'INCREMENT';
const RESET_COUNT = 'RESET-COUNT';
const SET_INPUT_VALUE = 'SET-INPUT-VALUE-COUNT';
const INPUT_MAX_VALUE = 'INPUT-MAX-VALUE';
const INPUT_MIN_VALUE = 'INPUT-MIN-VALUE';
const ON_LOAD_SET_VALUE = 'ON-LOAD-SET-VALUE';


export type InitialStateType = {
    countValue: number
    countMaxValue: number
    countMinValue: number
    inputMaxValue: number
    inputMinValue: number
}


const initialState: InitialStateType = {
    countValue: 1,
    countMaxValue: 5,
    countMinValue: 1,
    inputMaxValue: 5,
    inputMinValue: 1
};


type ActionsType = ReturnType<typeof incrementCountValueAC>
    | ReturnType<typeof resetCountValueAC>
    | ReturnType<typeof setInputValueAC>
    | ReturnType<typeof inputMaxValueAC>
    | ReturnType<typeof inputMinValueAC>
    | ReturnType<typeof onLoadSetCountAC>

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case INCREMENT: {
            let counterInc=state.countValue + 1
            saveState('count', counterInc);
            return ({
                ...state,
                countValue: counterInc
            });
        }
        case RESET_COUNT: {
            saveState('count', state.countMinValue);
            return ({
                ...state,
                countValue: state.countMinValue
            });
        }
        case SET_INPUT_VALUE: {
            saveState('count', state.inputMinValue);
            saveState('maxValue', state.inputMaxValue);
            saveState('minValue', state.inputMinValue);
            return ({
                    ...state,
                    countValue: state.inputMinValue,
                    countMaxValue: state.inputMaxValue,
                    countMinValue: state.inputMinValue,
                }
            );
        }
        case INPUT_MAX_VALUE: {
            return ({
                ...state,
                inputMaxValue: action.payload.value
            });
        }
        case INPUT_MIN_VALUE: {
            return ({
                ...state,
                inputMinValue: action.payload.value
            });
        }
        case ON_LOAD_SET_VALUE:{
            return ({
                ...state,
                countValue: action.payload.minValue,
                countMaxValue: action.payload.maxValue,
                countMinValue: action.payload.minValue,
                inputMaxValue: action.payload.maxValue,
                inputMinValue: action.payload.minValue
            })
        }
        default:
            return state;
    }
};

export const incrementCountValueAC = () => {
    return {type: INCREMENT} as const;
};
export const resetCountValueAC = () => {
    return {type: RESET_COUNT} as const;
};

export const setInputValueAC = () => {
    return {type: SET_INPUT_VALUE} as const;
};

export const inputMaxValueAC = (value: number) => {
    return {type: INPUT_MAX_VALUE, payload: {value}} as const;
};

export const inputMinValueAC = (value: number) => {
    return {type: INPUT_MIN_VALUE, payload: {value}} as const;
};

export const onLoadSetCountAC = (maxValue: number, minValue: number) => {
    return {type: ON_LOAD_SET_VALUE, payload: {maxValue, minValue}} as const;
};
