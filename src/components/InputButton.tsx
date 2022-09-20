import React, {ChangeEvent, useState} from "react";


type InputButtonType = {
    addText: (text: string) => void
}

export const InputButton = (props: InputButtonType) => {
    let [text, setText] = useState('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.currentTarget.value)
    }

    const onClickButtonHandler = (text: string) => {
        props.addText(text)
        setText("")
    }
    return (
        <div>
            <input value={text} onChange={onChangeInputHandler}/>
            <button onClick={() => onClickButtonHandler(text)}>+</button>
        </div>
    )
}