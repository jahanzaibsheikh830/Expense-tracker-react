import React from "react";
import Header from "./components/header";
import Balance from "./components/Balance";
import Income from "./components/Income";
import History from "./components/History";
import Transaction from "./components/Transaction";
import {TransactionProvider} from "./components/UseContext";

function App(){
  return(
    <div>
      <TransactionProvider>
      <Header/>
      <Balance/>
      <Income/>
      <History/>
      <Transaction/>
      </TransactionProvider>
    </div>
  )
}

export default App;