import React from 'react';

type ButtonType = {
    id: number
    title: string
    onClickCallback: React.MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
}

export const Button = React.memo(({id, title, onClickCallback, disabled}: ButtonType) => {
        return (
            <div>
                <button
                    key={id}
                    onClick={onClickCallback}
                    disabled={disabled}>{title}</button>
            </div>
        );
    }
);
