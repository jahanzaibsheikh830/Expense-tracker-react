import React, { useState ,useContext} from 'react'
import "../App.css";
import { TransactionContext } from "./UseContext";
export default function Transaction(){
    let {addTransaction } = useContext(TransactionContext)

    let [text ,setText] = useState('')
    let [amount ,setAmount] = useState(0)

    function addHandler(event) {
        event.preventDefault()
        console.log(text,amount)
        addTransaction({
            amount: Number(amount) ,
            des: text,
            id: Math.floor(Math.random()* 1000000000)
        })
    }
    return(
        <div>
            <div className="container">
                <div className="form"><br/>
                    <h3>Add new transaction</h3><hr/>
                    <form action="" onSubmit={addHandler}>
                        <input type="text" placeholder="Type" onChange={(e)=>{
                            setText(e.target.value) 
                        }}/>
                        <input type="text" placeholder="Amount" onChange={(e)=>{
                            setAmount(e.target.value) 
                        }}/>
                        <button>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}