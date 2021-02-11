import { act } from "react-dom/test-utils"

export default function  transactionFunc(state, action) {
    // console.log(state)
    let newTodo = [...state]

    switch(action.type){
        case 'Add_Transaction':
            return [action.payload, ...state]
        
        case 'Del_Transaction':
            // console.log(action.payload)
            return [ 
                ...state,
                state.filter(trans =>  trans.id !== action.payload)
                // newTodo.slice(action.payload ,1)
            ]
        default:
            return state
    }
}