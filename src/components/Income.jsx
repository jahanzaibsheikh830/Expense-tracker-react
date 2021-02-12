import React, { useContext } from 'react'
import "../App.css";
import { TransactionContext } from "./UseContext";

function Income(){
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
                <div className="income">
                    <p>Income <br/>${getIncome()}</p>
                    <p>Expense <br/>${getExpense()}</p>
                </div>
            </div>
        </div>
    );
}

export default Income;
