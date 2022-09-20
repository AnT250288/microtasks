import React, {ChangeEvent} from 'react';

type InputType = {
    text: string
    setText: (text: string) => void
}

export const Input = (props: InputType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setText(e.currentTarget.value)
    }

    return (
        <input value={props.text} onChange={onChangeInputHandler}/>
    );
};
