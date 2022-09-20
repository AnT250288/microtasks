import React from 'react';

type ButtonForInputType = {
    name: string
    callback: () => void
}

export const ButtonForInput = (props: ButtonForInputType) => {

    const onClickHandler = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};
