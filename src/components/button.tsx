import React from 'react';

type ButtonType = {
    id: number
    name: string
    onClickCallback: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

export const Button = React.memo((props: ButtonType) => {
        return (
            <div>
                <button
                    key={props.id}
                    onClick={props.onClickCallback}
                    disabled={props.disabled}>{props.name}</button>
            </div>
        );
    }
);
