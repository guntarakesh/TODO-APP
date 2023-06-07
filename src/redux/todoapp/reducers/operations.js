import { ADD_TODO, DELETE_ALL, REMOVE_TODO, UPDATE_TODO , UPDATE_CHECKBOX} from "../actions";





const initialStte = [ 
   
];

export const operationsReducer= (state=initialStte , action)=>{
    switch(action.type){
        case ADD_TODO:
            return [ ...state,action.payload]
        case DELETE_ALL: 
            return [];
        case REMOVE_TODO:
            const filteredTodos = state.filter((todo)=>todo.id!==action.payload);
            return filteredTodos;
        case UPDATE_TODO:
            let data = action.payload
            const updateArray = [];
            state.map((item)=>{
                if(item.id == data.id)
                {
                    item.id = data.id;   
                    item.todo = data.todo; 
                    item.completed = data.completed;
                }
                updateArray.push(item);

            })
            return updateArray;
        case UPDATE_CHECKBOX:
            let todoArray = [];
            state.map((item)=>{
                if(item.id === action.payload){
                    item.completed= !item.completed
                }
                todoArray.push(item);
            })
            
            return todoArray;


        default:return state;
    }
}