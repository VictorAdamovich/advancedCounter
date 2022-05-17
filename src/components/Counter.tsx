import React from 'react';
import Button from './Button';

export type counterType = {
    count: number
    maxValue: number
    startValue: number
    countIncrement: () => void
    resetCounter: () => void
}


export function Counter(props: counterType) {
    return (
        <div className={'counterBody'}>
            <div className="counterBody_box">
                <span
                    className={props.count < props.maxValue ? 'countValue' : 'countValue Limited'}>{props.count}</span>
            </div>
            <div className="buttonBox">
                <Button id={1} onClickCallback={props.countIncrement} name={'Inc'} disabled={props.count >= props.maxValue}/>
                <Button id={2} onClickCallback={props.resetCounter} name={'Res'} disabled={props.count === props.startValue}/>
            </div>
        </div>
    );
}