import { act } from "react-dom/test-utils"

export default function  transactionFunc(state, action) {
    switch(action.type){
        case 'Add_Transaction':
            return [action.payload, ...state]       
        case 'Del_Transaction':
            return [ 
                ...state,
                state.filter(trans =>  trans.id !== action.payload)
            ]
        default:
            return state;
    }
}