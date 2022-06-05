import React, {useEffect} from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {
    incrementCountValueAC,
    inputMaxValueAC,
    inputMinValueAC, onLoadSetCountAC,
    resetCountValueAC,
    setInputValueAC
} from './state/counter-reducer';
import {CounterSettings} from './components/CounterSettings';
import {restoreState} from './localStorage/localStorage';
import {Counter} from './components/Counter';

function App() {
    const countValue = useSelector<AppRootStateType, number>(state => state.counter.countValue);
    const countMaxValue = useSelector<AppRootStateType, number>(state => state.counter.countMaxValue);
    const countMinValue = useSelector<AppRootStateType, number>(state => state.counter.countMinValue);
    const inputMaxValue = useSelector<AppRootStateType, number>(state => state.counter.inputMaxValue);
    const inputMinValue = useSelector<AppRootStateType, number>(state => state.counter.inputMinValue);

    const dispatch = useDispatch();
    const incrementCountCB = () => dispatch(incrementCountValueAC());
    const resetCountCB = () => dispatch(resetCountValueAC());
    const setInputValue = () => dispatch(setInputValueAC());
    const onChangeHandlerSetMaxValue = (value: number) => dispatch(inputMaxValueAC(value));
    const onChangeHandlerSetMinxValue = (value: number) => dispatch(inputMinValueAC(value));

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
                incrementCountCB={incrementCountCB}
                resetCountCB={resetCountCB}
            />
        </div>
    );
}

export default App;