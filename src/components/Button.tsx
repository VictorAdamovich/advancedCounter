import React from 'react';

type buttonType = {
    id: number
    name: string
    onClickCallback: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

export const Button = (props: buttonType) => {
    return (
        <div>
            <button
                key={props.id}
                onClick={props.onClickCallback}
                disabled={props.disabled}>{props.name}</button>
        </div>
    );
};

export default Button;