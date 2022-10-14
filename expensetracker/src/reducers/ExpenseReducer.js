const initialstate = {
    allExpenses : []
}

const ExpenseReducer = (state=initialstate,action) =>{
switch(action.type){
    case "LISTALLEXPENSES":
        return {
            ...state,
            allExpenses:action.payload
        };
        default:
            return state;
}
}

export default ExpenseReducer;