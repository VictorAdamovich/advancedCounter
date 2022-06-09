import React from 'react';
import {EditNotion} from './editNotion';
import {Button} from './button';

export type CounterType = {
    countValue: number
    counterLimited: boolean
    editMode: boolean
    incrementCountCB: () => void
    resetCountCB: () => void
}

export const Counter = React.memo((props: CounterType) => {
        const incButtonTitle = 'Inc';
        const resButtonTitle = 'Res';

        const counterClassName = props.counterLimited ? 'countValue Limited' : 'countValue';

        return props.editMode ?
            <EditNotion/>
            : <div className={'counterBody'}>
                <div className="counterBody_box">
                <span
                    className={counterClassName}>{props.countValue}</span>
                </div>
                <div className="buttonBox">
                    <Button id={1} onClickCallback={props.incrementCountCB} title={incButtonTitle} disabled={props.counterLimited}/>
                    <Button id={2} onClickCallback={props.resetCountCB} title={resButtonTitle} disabled={!props.counterLimited}/>
                </div>
            </div>;
    }
);

