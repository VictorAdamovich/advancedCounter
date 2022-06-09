import React, {useCallback, useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {
    incrementCountValueAC,
    inputMaxValueAC,
    inputMinValueAC,
    onLoadSetCountAC,
    resetCountValueAC,
    setInputValueAC
} from './state/counterReducer';
import {CounterSettings} from './components/counterSettings';
import {restoreState} from './state/localStorage';
import {Counter} from './components/counter';

const getCounterValue = (state: AppRootStateType): number => state.counter.countValue;

export const App = () => {
    const countValue = useSelector(getCounterValue);
    const countMaxValue = useSelector<AppRootStateType, number>(state => state.counter.countMaxValue);
    const countMinValue = useSelector<AppRootStateType, number>(state => state.counter.countMinValue);
    const inputMaxValue = useSelector<AppRootStateType, number>(state => state.counter.inputMaxValue);
    const inputMinValue = useSelector<AppRootStateType, number>(state => state.counter.inputMinValue);

    const dispatch = useDispatch();
    const incrementCountCB = useCallback(() => dispatch(incrementCountValueAC()), []);
    const resetCountCB = useCallback(() => dispatch(resetCountValueAC()), []);
    const setInputValue = useCallback(() => dispatch(setInputValueAC()), []);
    const onChangeHandlerSetMaxValue = useCallback((value: number) => dispatch(inputMaxValueAC(value)), []);
    const onChangeHandlerSetMinxValue = useCallback((value: number) => dispatch(inputMinValueAC(value)), []);

    useEffect(() => {
        let maxValueFromLS = restoreState('maxValue', inputMaxValue);
        let minValueFromLS = restoreState('minValue', inputMinValue);
        dispatch(onLoadSetCountAC(maxValueFromLS, minValueFromLS));
    }, []);


    const counterLimited = countValue >= countMaxValue;
    const inputError = inputMinValue >= inputMaxValue || inputMinValue < 0;
    const editMode = countMaxValue !== inputMaxValue || countMinValue !== inputMinValue;

    return (
        <div className="App">
            <CounterSettings
                inputError={inputError}
                inputMaxValue={inputMaxValue}
                inputMinValue={inputMinValue}
                setInputValue={setInputValue}
                onChangeHandlerSetMaxValue={onChangeHandlerSetMaxValue}
                onChangeHandlerSetMinxValue={onChangeHandlerSetMinxValue}
            />
            <Counter
                editMode={editMode}
                countValue={countValue}
                counterLimited={counterLimited}
                resetCountCB={resetCountCB}
                incrementCountCB={incrementCountCB}
            />
        </div>
    );
};