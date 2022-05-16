import React, {useEffect, useState} from 'react';
import Button from './Button';
import {Input} from './input';


type setCounterType = {
    maxValue: number
    startValue: number
    setInputValue: (maxValue: number, minValue: number) => void
}


export const SetCounter = (props: setCounterType) => {
    const [maxValue, setMaxValue] = useState<number>(0);
    const [startValue, setStartValue] = useState<number>(0);

    useEffect(()=>{
        let maxValue = localStorage.getItem('maxValue');
        if (maxValue) {
            setMaxValue(JSON.parse(maxValue));
        }

    },[])


    useEffect(()=>{
        let minValue = localStorage.getItem('startValue');
        if (minValue) {
            setStartValue(JSON.parse(minValue));
        }

    },[])


    const setMax = (maxValue: number) => {
        setMaxValue(maxValue);
    };

    const setMin = (startValue: number) => {
        setStartValue(startValue);
    };


    const onClickCallbackHandler = () => props.setInputValue(maxValue, startValue);


    return (
        <div className={'counterBody'}>
            <div className={'counterBody_box'}>
                <Input title={'Max Value'} value={maxValue} callback={setMax} error={startValue >= maxValue}/>
                <Input title={'Min Value'} value={startValue} callback={setMin} error={startValue >= maxValue}/>
            </div>
            <div className={'buttonBox'}>
                <Button id={3} onClickCallback={onClickCallbackHandler} name={'Set'} disabled={startValue >= maxValue}/>
            </div>

        </div>
    );
};
