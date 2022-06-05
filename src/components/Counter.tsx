import React from 'react';
import Button from './Button';
import {EditNotion} from './CounterBody/EditNotion';

export type counterType = {
    countValue: number
    counterLimited: boolean
    editMode: boolean
    incrementCountCB: () => void
    resetCountCB: () => void
}

export function Counter(props: counterType) {
    const counterClassName = props.counterLimited ? 'countValue Limited' : 'countValue';

    return props.editMode ?
        <EditNotion/>
        : <div className={'counterBody'}>
            <div className="counterBody_box">
                <span
                    className={counterClassName}>{props.countValue}</span>
            </div>
            <div className="buttonBox">
                <Button id={1} onClickCallback={props.incrementCountCB} name={'Inc'} disabled={props.counterLimited}/>
                <Button id={2} onClickCallback={props.resetCountCB} name={'Res'} disabled={!props.counterLimited}/>
            </div>


        </div>;

}

