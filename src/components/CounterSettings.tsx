import React, {useState} from 'react';
import Button from './Button';
import {Input} from './input';


type setCounterType = {
    inputMaxValue: number
    inputMinValue: number
    inputError:boolean
    setInputValue: () => void
    onChangeHandlerSetMaxValue:(value:number)=>void
    onChangeHandlerSetMinxValue:(value:number)=>void
}


export const CounterSettings = (props: setCounterType) => {
        return (
            <div className={'counterBody'}>
                <div className={'counterBody_box'}>
                    <Input title={'Max Value'} value={props.inputMaxValue} callback={props.onChangeHandlerSetMaxValue} error={props.inputError} />
                    <Input title={'Min Value'} value={props.inputMinValue} callback={props.onChangeHandlerSetMinxValue} error={props.inputError} />
                </div>
                <div className={'buttonBox'}>
                    <Button id={3} onClickCallback={props.setInputValue} name={'Set'} disabled={props.inputError}/>
                </div>

            </div>
        );
    }
;
