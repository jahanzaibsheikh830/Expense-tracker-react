import React, {createContext, useReducer } from "react";
import TransactionFunc  from "./UserReducer";
let intialTransaction =[
    {
        amount: 100, des: "Cash", id: 0 
    },
    {
        amount: -50, des: "Pepsi", id: 1 
    },
    {
        amount: 25000, des: "Salary", id: 2 
    }
] 

export let TransactionContext = createContext(intialTransaction)

export function  TransactionProvider({children}) {
    let [state, dispatch] = useReducer(TransactionFunc, intialTransaction)

    function addTransaction(addObj) {
        console.log(intialTransaction)
        console.log(addObj)
        dispatch(
            {
                action: 'Add_Transaction',
                payload:{
                    amount: addObj.amount,
                    des: addObj.des,
                    id: addObj.id
                }
            }
        )
    }
    
    return(
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction: addTransaction
        }}>
            {children}    
        </TransactionContext.Provider>
    )
}