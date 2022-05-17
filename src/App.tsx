import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SetCounter} from './SetCounter';
import {restoreState, saveState} from './localStorage/localStorage';

function App() {
    const [count, setCount] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);


    useEffect(()=>{
        let value = restoreState('count',count)
        setCount(value)
    },[])

    const addNumber = () => {
        let newCount = count + 1;
        saveState('count',newCount)
        setCount(newCount);
    };

    const resetCounter = () => {
        saveState('count',startValue)
        setCount(startValue);
    };

    const setInputValue = (maxValue: number, startValue: number) => {
        saveState('count',startValue)
        saveState('maxValue',maxValue)
        saveState('startValue',startValue)
        setMaxValue(maxValue);
        setStartValue(startValue);
        setCount(startValue);
    };

    return (
        <div className="App">
            <SetCounter
                maxValue={maxValue}
                startValue={startValue}
                setInputValue={setInputValue}
            />
            <Counter
                count={count}
                maxValue={maxValue}
                startValue={startValue}
                addNumber={addNumber}
                resetCounter={resetCounter}
            />
        </div>
    );
}

export default App;