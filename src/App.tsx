import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/Button";
import {Money} from "./Money";
import {InputButton} from "./components/InputButton";
import {Input} from "./components/Input";
import {ButtonForInput} from "./components/ButtonForInput";

export type FilterType = "all" | "RUBLS" | 'Dollars'
export type MoneyType = {
    banknots: string
    value: number
    number: string
}


function App() {
    /*
            const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
                console.log("Hello I'm Igor ))!")
            }

            const mySecondSubscriber = () => {
                console.log("Hello I'm Dymich ))!")
            }

        const onClickHandler = (name: string) => {
            console.log(name)
        }

            let [students, setStudents] = useState([
                {id: 1, name: "James", age: 10},
                {id: 2, name: "jasj", age: 11},
                {id: 3, name: "JFisa", age: 10},
                {id: 4, name: "IAOHDUSd", age: 10},
            ])

         const foo1 = () => {
             console.log(100200)
         }

         const foo2 = (num: number) => {
             console.log(num)
         }*/
    /*
        const Button1Foo = (subscriber: string, age: number) => {
            console.log(subscriber, age)
        }
        const Button2Foo = (subscriber: string, age: number) => {
            console.log(subscriber, age)
        }
        const Button3Foo = () => {
            console.log("I'm a stupid button!")
        }*/
    /*    let [a, setA] = useState(1)
    const onAddHandler = () => {
        setA(++a)
        console.log(a)
    }
    const onResetHandler = () => {
        setA(0)
    }*/


    /*    const [money, setMoney] = useState<Array<MoneyType>>([
            {banknots: 'Dollars', value: 100, number: ' a1234567890'},
            {banknots: 'Dollars', value: 50, number: ' z1234567890'},
            {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
            {banknots: 'Dollars', value: 100, number: ' e1234567890'},
            {banknots: 'Dollars', value: 50, number: ' c1234567890'},
            {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
            {banknots: 'Dollars', value: 50, number: ' x1234567890'},
            {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
        ])

        const [filter, setFilter] = useState<FilterType>("all")

        let currentMoney = money
        if (filter === "RUBLS") {
            currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === "RUBLS")
        }
        if (filter === 'Dollars') {
            currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars')
        }

        const onclickFilterHandler = (buttonValue: FilterType) => {
            setFilter(buttonValue)
        }*/

    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [text, setText] = useState('')

    const addText = (text: string) => {
        let newMessage = {message: text}
        setMessage([newMessage, ...message])
    }

    const buttonHandler = () => {
        addText(text)
        setText("")
    }


    return (
        <>
            {/* <div>
                <input/>
                <button>+</button>
            </div>*/}
            {/*<InputButton addText={addText}/>*/}

            <Input text={text} setText={setText}/>
            <ButtonForInput name={"+"} callback={buttonHandler}/>

            {message.map((mes, index) => {
                return (
                    <div key={index}>{mes.message}</div>
                )
            })}

            {/*<button onClick={foo1}>1</button>
            <button onClick={() => foo2(100200)}>2</button>*/}
            {/* <button onClick={() => onClickHandler("Igor")}>MyYoutubeChannel 1
            </button>
            <button onClick={(event) => {
                onClickHandler("Dimych")
            }}>MyYoutubeChannel 2
            </button>*/}
            {/*<Button callBack={() => Button1Foo("Igor", 39)} name={"YouTube Channel 1"}/>
            <Button callBack={() => Button2Foo("Dimych", 36)} name={"YouTube Channel 2"}/>
            <Button name={"Stupid Button"} callBack={Button3Foo}/>*/}
            {/*<h1>{a}</h1>
            <button onClick={onAddHandler}>add 1</button>
            <button onClick={onResetHandler}>reset</button>*/}

            {/*
            <Money currentMoney={currentMoney} onclickFilterHandler={onclickFilterHandler}/>
*/}


        </>
    );
}

export default App;
