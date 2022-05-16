import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SetCounter} from './SetCounter';

function App() {
    const [count, setCount] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(0);



    useEffect(() => {
        let countValue = localStorage.getItem('count');
        if (countValue) {
            setCount(JSON.parse(countValue));
        }
    }, []);


    const addNumber = () => {
        let newCount = count + 1;
        localStorage.setItem('count', JSON.stringify(newCount));
        setCount(newCount);
    };

    const resetCounter = () => {
        localStorage.setItem('count', JSON.stringify(startValue));
        setCount(startValue);
    };

    const setInputValue = (maxValue: number, startValue: number) => {
        localStorage.setItem('count', JSON.stringify(startValue));
        localStorage.setItem('maxValue', JSON.stringify(maxValue));
        localStorage.setItem('startValue', JSON.stringify(startValue));

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