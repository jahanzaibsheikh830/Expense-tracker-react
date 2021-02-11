export default function  transactionFunc(state, action) {
    console.log(state)
    switch(action.type){
        case 'Add_Transaction':{
            return action.payload
        }
        default:
            return state
    }
}