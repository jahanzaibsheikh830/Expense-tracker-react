import React, { useContext } from 'react'
import "../App.css";
import { TransactionContext } from "./UseContext";

export default function History() {
    let { transaction, addTransaction} = useContext(TransactionContext)
    return (
        <div>
            <div className="container">
                <div><br />
                    <h3>History</h3><hr />
                    <ul>
                        {
                            transaction.map((element, index) => {
                                return (
                                    <li className="history" key={index}>
                                        <span>{element.des}</span>
                                        <span >{element.amount}</span>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}