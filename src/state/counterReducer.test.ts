import {
    counterReducer,
    incrementCountValueAC,
    InitialStateType,
    resetCountValueAC,
    setInputValueAC
} from './counterReducer';

let startState: InitialStateType = {
    countValue: 1,
    countMaxValue: 5,
    countMinValue: 1,
    inputMaxValue: 5,
    inputMinValue: 1
};

test('incrementCountValueAC test', () => {
    const endState = counterReducer(startState, incrementCountValueAC());

    expect(endState.countValue).toBe(startState.countValue+1)
});


test('resetCountValueAC test', () => {
    const endState = counterReducer(startState, resetCountValueAC());

    expect(endState.countValue).toBe(startState.countMinValue)
    expect(endState.countValue).toBe(startState.inputMinValue)
});


test('setInputValueAC test', () => {
    const endState = counterReducer(startState, setInputValueAC());

    expect(endState.countMaxValue).toBe(startState.inputMaxValue)
    expect(endState.countMinValue).toBe(startState.inputMinValue)
});