import React from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from './state/store';
import {
    incrementCountValueAC,
    inputMaxValueAC,
    inputMinValueAC,
    resetCountValueAC,
    setInputValueAC
} from './state/counter-reducer';
import {CounterSettings} from './components/CounterSettings';

function App() {
    const countValue = useSelector<AppRootStateType, number>(state => state.counter.countValue);
    const countMaxValue = useSelector<AppRootStateType, number>(state => state.counter.countMaxValue);
    const inputMaxValue = useSelector<AppRootStateType, number>(state => state.counter.inputMaxValue);
    const inputMinValue = useSelector<AppRootStateType, number>(state => state.counter.inputMinValue);

    const dispatch = useDispatch();
    const incrementCountCB = () => dispatch(incrementCountValueAC());
    const resetCountCB = () => dispatch(resetCountValueAC());
    const setInputValue = () => dispatch(setInputValueAC());
    const onChangeHandlerSetMaxValue = (value: number) => dispatch(inputMaxValueAC(value));
    const onChangeHandlerSetMinxValue = (value: number) => dispatch(inputMinValueAC(value));

    const counterLimited = countValue >= countMaxValue;

    return (
        <div className="App">
            <CounterSettings
                inputMaxValue={inputMaxValue}
                inputMinValue={inputMinValue}
                setInputValue={setInputValue}
                onChangeHandlerSetMaxValue={onChangeHandlerSetMaxValue}
                onChangeHandlerSetMinxValue={onChangeHandlerSetMinxValue}
            />

            <Counter
                countValue={countValue}
                counterLimited={counterLimited}
                incrementCountCB={incrementCountCB}
                resetCountCB={resetCountCB}
            />
        </div>
    );
}

export default App;