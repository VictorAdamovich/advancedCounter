import React from 'react';

type InitValueType = {
    title: string
    value: number
    callback: (value: number) => void
    error?:boolean
}


export const Input = ({title,value,callback,error}: InitValueType) => {
    const onChangeCallback = (event: React.ChangeEvent<HTMLInputElement>) => callback(Number(event.target.value))
    return (
        <div className={'inputValue'}>
            <span>{title}</span>
            <input className={error?'input_box error':'input_box'} type="number" value={value} onChange={onChangeCallback} />
        </div>
    );
};
