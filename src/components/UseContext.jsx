import React, {createContext, useReducer } from "react";
import TransactionFunc  from "./UserReducer";
let intialTransaction =[
    // {
    //     amount: 100, des: "Cash" 
    // },
    // {
    //     amount: -50, des: "Pepsi" 
    // },
    // {
    //     amount: 25000, des: "Salary"
    // }
] 

export let TransactionContext = createContext(intialTransaction)

export function  TransactionProvider({children}) {
    let [state, dispatch] = useReducer(TransactionFunc, intialTransaction)

    function addTransaction(addObj) {
        dispatch(
            {
                type: 'Add_Transaction',
                payload:{
                    amount: addObj.amount,
                    des: addObj.des,
                }
            }
        )
    }
    function delItem(id) {
        dispatch(
            {
                type: 'Del_Transaction',
                payload: id,
            }
        )
    }
    return(
        <TransactionContext.Provider value={{
            transaction: state,
            addTransaction: addTransaction,
            delItem: delItem
    }}>
            {children}    
        </TransactionContext.Provider>
    )
}