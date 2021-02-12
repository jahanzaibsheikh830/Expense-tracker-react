import { act } from "react-dom/test-utils"

export default function  transactionFunc(state, action) {
    let newArr = [...state]
    console.log(newArr)
    switch(action.type){
        case 'Add_Transaction':
            return [action.payload, ...state]       
        case 'Del_Transaction':
            return(  
                [...state],
                state.filter((trans,index) =>  index !== action.payload)
                )
                
        default:
            return state;
    }
}