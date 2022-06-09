import React from 'react';
import {Input} from './input';
import {Button} from './button';


type SetCounterType = {
    inputMaxValue: number
    inputMinValue: number
    inputError: boolean
    setInputValue: () => void
    onChangeHandlerSetMaxValue: (value: number) => void
    onChangeHandlerSetMinxValue: (value: number) => void
}


export const CounterSettings = React.memo((props: SetCounterType) => {
            const inputMaxValueTitle='Max Value'
            const inputMinValueTitle='Min Value'
            const setButtonTitle='Set'

            return (
                <div className={'counterBody'}>
                    <div className={'counterBody_box'}>
                        <Input title={inputMaxValueTitle} value={props.inputMaxValue} callback={props.onChangeHandlerSetMaxValue}
                               error={props.inputError}/>
                        <Input title={inputMinValueTitle} value={props.inputMinValue} callback={props.onChangeHandlerSetMinxValue}
                               error={props.inputError}/>
                    </div>
                    <div className={'buttonBox'}>
                        <Button id={3} onClickCallback={props.setInputValue} title={setButtonTitle} disabled={props.inputError}/>
                    </div>

                </div>
            );
        }
    )
;
