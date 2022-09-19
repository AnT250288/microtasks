import React from "react";
import {FilterType, MoneyType} from "./App";

type MoneyPropsType = {
    currentMoney: Array<MoneyType>
    onclickFilterHandler: (buttonValue: FilterType) => void
}


export const Money = (props: MoneyPropsType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((item, index) => {
                    return (
                        <li key={index}>
                            <span>{item.banknots}</span>
                            <span style={{color: "green"}}> {item.value}</span>
                            <span style={{color: "red"}}> {item.number}</span>
                        </li>
                    )
                })}
            </ul>

            <div style={{marginLeft: "35px"}}>
                <button onClick={() => props.onclickFilterHandler('all')}>All</button>
                <button onClick={() => props.onclickFilterHandler('RUBLS')}>Ruble</button>
                <button onClick={() => props.onclickFilterHandler('Dollars')}>Dollar</button>
            </div>
        </>
    )
}