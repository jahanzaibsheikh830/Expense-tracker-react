import React,{useContext} from 'react'
import "../App.css";
import { TransactionContext } from "./UseContext";

export default function Balance(){
    let {transaction} = useContext(TransactionContext)

    function getIncome(){
        let income = 0;
        for (let i = 0; i < transaction.length; i++) {
            if (transaction[i].amount >0) {
                income += transaction[i].amount       
            }
        }
        return income
    }

    function getExpense(){
        let expense = 0;
        for (let i = 0; i < transaction.length; i++) {
            if (transaction[i].amount < 0) {
                expense += transaction[i].amount       
            }
        }
        return expense
    }
    return(
        <div>
            <div className="container">
                <div>
                <h6>YOUR BALANCE</h6>
                <h3>${getIncome() + getExpense()}</h3>
                </div>
            </div>
        </div>
    );
}