import { NEW_TASK } from "../actionCreaters";

let initialState = {
    idController: 3,
    tasks : [
        {
            id: 3,
            selected: false,
            data:{
                description: "First task",
                deadline: "00:00"
            },
            dateCreated: null,
            complete: false,
            missed: false,
            updating: null,
            dropdown: false
        },
        { 
            id: 2,  
            selected: false,
            data:{
                description: "Second task",
                deadline: "00:00"
            },
            dateCreated: null,
            complete: false,
            missed: false,
            updating: null,
            dropdown: false
        },
        {
            id: 1, 
            selected: false,
            data:{
                description: "Third task",
                deadline: "00:00"
            },
            dateCreated: null,
            complete: false,
            missed: false,
            updating: null,
            dropdown: false
        },
    ]
}

const controlTasks = (state = initialState, action) => {
    state = {...state};
    switch(action.type){
        case NEW_TASK: 
            state.tasks  = [...state.tasks];
            state.tasks.data = {...state.tasks.data};
            let task = {
                id: ++state.idController, 
                selected: false,
                data:{
                    description: "Third task",
                    deadline: "00:00"
                },
                dateCreated: null,
                complete: false,
                missed: false,
                updating: {
                    description : "",
                    deadline : "00:00",
                },
                dropdown: false
            }
            state.tasks.unshift(task);
            return state;
        default:
            return state;
    }
}

export default controlTasks;