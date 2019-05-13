import { 
        NEW_TASK, 
        CHANGE_DESCRIPTION, 
        CANCEL_UPDATE, 
        CHANGE_DEADLINE, 
        ADD_TASK, 
        SHOW_DROPDOWN, 
        DELETE_TASK, 
        UPDATE_TASK, 
        SELECT_TASK, 
        CHANGE_SEARCH, 
        COMPLETE_TASK, 
        DELETE_SELECTED_TASKS, 
        SELECT_ALL_TASKS,
        COMPLETE_SELECTED_TASKS} from "../actionCreaters";
import { DateTime } from "luxon";
import {cloneDeep} from "lodash"

let initialState = {
    search : "",
    idController: 3,
    tasks: [
        {
            id: 3,
            selected: false,
            data: {
                description: "First task",
                deadline: DateTime.local().startOf('day')
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
            data: {
                description: "Second task",
                deadline: DateTime.local().startOf('day')
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
            data: {
                description: "Third task",
                deadline: DateTime.local().startOf('day')
            },
            dateCreated: null,
            complete: true,
            missed: false,
            updating: null,
            dropdown: false
        },
    ]
}

const controlTasks = (state = initialState, action) => {
    state = { ...state };
    switch (action.type) {
        case CHANGE_SEARCH:
            state.search = action.value;
            return state;
        case NEW_TASK:
            state.tasks = [...state.tasks];
            state.tasks.data = { ...state.tasks.data };
            let task = {
                id: ++state.idController,
                selected: false,
                data: {
                    description: "",
                    deadline: ""
                },
                dateCreated: null,
                complete: false,
                missed: false,
                updating: {
                    description: "",
                    deadline: DateTime.local().startOf('hour')
                },
                dropdown: false
            }
            state.tasks.unshift(task);
            return state;
        case UPDATE_TASK:
            state.tasks = state.tasks.map(item => {
                if (item.id === action.id){
                    item.updating = {
                        description: item.data.description,
                        deadline: item.data.deadline
                    }
                    item.dropdown = false
                }
      
                return item;
            });
            return state;
        case COMPLETE_TASK:
            state.tasks = state.tasks.map(item => {
                if (item.id === action.id){
                    item.complete = true
                    item.dropdown = false
                }
                return item;
            });
            return state;
        case COMPLETE_SELECTED_TASKS:
            state.tasks = state.tasks.map(item => {
                if(item.selected)
                    item.complete = true;
                return item;
            });
            return state;
        case CHANGE_DESCRIPTION:
            state.tasks = [...state.tasks];
            state.tasks = state.tasks.map(item => {
                if (item.id === action.id)
                    item.updating = {
                        description: action.value,
                        deadline: item.updating.deadline
                    }
                return item;
            });
            return state;
        case CHANGE_DEADLINE:
            state.tasks = [...state.tasks];
            let day;
            state.tasks.forEach(item => {
                if (item.id === action.id) day = item.updating.deadline.day
            });

            if (action.direction) {
                state.tasks = state.tasks.map(item => {
                    if (item.id === action.id)
                        item.updating = {
                            description: item.updating.description,
                            deadline: item.updating.deadline.plus({ minutes: 30 })
                        }
                    return item;
                });
            } else {
                state.tasks = state.tasks.map(item => {
                    if (item.id === action.id)
                        item.updating = {
                            description: item.updating.description,
                            deadline: item.updating.deadline.minus({ minutes: 30 })
                        }
                    return item;
                });
            }

            state.tasks.forEach(item => {
                if (item.id === action.id) item.updating.deadline = item.updating.deadline.set({ day: day })
            });
            return state;
        case CANCEL_UPDATE:
            state.tasks = [...state.tasks];
            state.tasks = state.tasks.map(item => {
                if (item.id === action.id) item.updating = null
                return item;
            });
            state.tasks = state.tasks.filter(item => !((item.id === action.id) && !item.data.description));
            return state;
        case ADD_TASK:
            state.tasks = [...state.tasks];
            state.tasks = state.tasks.map(item => {
                if (item.id === action.id) {
                    item.data = cloneDeep(item.updating);
                    item.updating = null;
                }
                return item;
            });
            
            return state;
        case SHOW_DROPDOWN:
            state.tasks = [...state.tasks];
            state.tasks.forEach(item => {
                if(item.id === action.id){
                    item.dropdown = !item.dropdown;
                }else{
                    item.dropdown = false;
                }
            });
            return state;
        case DELETE_TASK:
            state.tasks = state.tasks.filter(item => item.id !== action.id);
            return state;
        case DELETE_SELECTED_TASKS:
            state.tasks = state.tasks.filter(item => !item.selected);
            return state;
        case SELECT_TASK:
        state.tasks = state.tasks.map(item => {
            if (item.id === action.id) 
                item.selected = !item.selected
            return item;
        });
            return state;
        case SELECT_ALL_TASKS:
            if(state.tasks.every(item => item.selected || item.complete || item.missed)){
                state.tasks = state.tasks.map(item => {
                    if(!item.complete && !item.missed)
                        item.selected = false;
                    return item
                })
            }else{
                state.tasks = state.tasks.map(item => {
                    if(!item.complete && !item.missed)
                        item.selected = true;
                    return item
                })
            }
            return state;
        default:
            return state;
    }
}

export default controlTasks;