const INCREMENT = 'INCREMENT';
const RESET_COUNT = 'RESET-COUNT';
const SET_INPUT_VALUE = 'SET-INPUT-VALUE-COUNT';
const INPUT_MAX_VALUE = 'INPUT-MAX-VALUE';
const INPUT_MIN_VALUE = 'INPUT-MIN-VALUE';


type initialStateType = {
    countValue: number
    countMaxValue: number
    countMinValue: number
    inputMaxValue: number
    inputMinValue: number
}


const initialState: initialStateType = {
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

export const counterReducer = (state: initialStateType = initialState, action: ActionsType): any => {
    switch (action.type) {
        case INCREMENT: {
            return ({
                ...state,
                countValue: state.countValue + 1
            });
        }
        case RESET_COUNT: {
            return ({
                ...state,
                countValue: state.countMinValue
            });
        }
        case 'SET-INPUT-VALUE-COUNT': {
            return ({
                    ...state,
                    countValue: state.inputMinValue,
                    countMaxValue: state.inputMaxValue,
                    countMinValue: state.inputMinValue,
                }
            );
        }
        case 'INPUT-MAX-VALUE': {
            return ({
                ...state,
                inputMaxValue: action.payload.value
            });
        }
        case 'INPUT-MIN-VALUE': {
            return ({
                ...state,
                inputMinValue: action.payload.value
            });
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
