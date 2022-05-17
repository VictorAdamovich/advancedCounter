import React from 'react';

type InitValueType = {
    title: string
    value: number
    callback: (value: number) => void
    error:boolean
}




export const Input = (props: InitValueType) => {
    const onChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => props.callback(Number(event.target.value))
    return (
        <div className={'inputValue'}>
            <span>{props.title}</span>
            <input className={props.error?'input_box error':'input_box'} type="number" value={props.value} onChange={onChangeCallback} />
        </div>
    );
};
