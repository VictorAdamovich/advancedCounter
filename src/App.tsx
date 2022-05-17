import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './components/Counter';
import {CounterSettings} from './components/CounterSettings';
import {restoreState, saveState} from './localStorage/localStorage';

function App() {
    const [count, setCount] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);
    // const [error, setError] = useState<boolean>(false);


    useEffect(() => {
        let value = restoreState('count', count);
        setCount(value);
    }, []);

    const countIncrement = () => {
        let newCount = count + 1;
        saveState('count', newCount);
        setCount(newCount);
    };

    const resetCounter = () => {
        saveState('count', startValue);
        setCount(startValue);
    };

    const setInputValue = (maxValue: number, startValue: number) => {
        saveState('count', startValue);
        saveState('maxValue', maxValue);
        saveState('startValue', startValue);
        setMaxValue(maxValue);
        setStartValue(startValue);
        setCount(startValue);
    };

    return (
        <div className="App">
            <CounterSettings
                maxValue={maxValue}
                startValue={startValue}
                setInputValue={setInputValue}
            />
            <Counter
                count={count}
                maxValue={maxValue}
                startValue={startValue}
                countIncrement={countIncrement}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;