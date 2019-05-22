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
        COMPLETE_SELECTED_TASKS,
        UPDATE_SELECTED_TASKS,
        CHECK_TASKS_DEADLINE,
        LOAD_TASKS} from "../actionCreaters";
import { DateTime } from "luxon";
import {cloneDeep} from "lodash"

let initialState = {
    search : "",
    tasks: []
}

const controlTasks = (state = initialState, action) => {
    let filter;
    state = { ...state };
    switch (action.type) {
        case LOAD_TASKS:
            action.tasks = action.tasks.map(task => {
                task.data = {...task.data};
                task.data.deadline = DateTime.fromISO(task.data.deadline);
                return task;
            });
            state.tasks = action.tasks;
            return state;
        case CHANGE_SEARCH:
            state.search = action.value;
            return state;
        case NEW_TASK:
            state.tasks = [...state.tasks];
            state.tasks.data = { ...state.tasks.data };
            let task = {
                id: state.tasks.length ? +state.tasks[0].id + 1 : 1,
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
        case UPDATE_SELECTED_TASKS:
            state.tasks = state.tasks.map(item => {
                if(item.selected)
                    item.updating = {
                        description: item.data.description,
                        deadline: item.data.deadline
                    }
                item.selected = false;
                return item;
            });
            return state;
        case COMPLETE_TASK:
            state.tasks = state.tasks.map(item => {
                if (item.id === action.id){
                    item.complete = true
                    item.dropdown = false
                    fetch('http://localhost/api/tasks/complete', {
                        headers: {
                            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                            'body': JSON.stringify([item.id]),
                            'Content-Type': 'application/json'
                        },
                        method: 'PUT',
                    })
                }
                return item;
            });
            return state;
        case COMPLETE_SELECTED_TASKS:
            filter = [];
            
            state.tasks = state.tasks.map(item => {
                if(item.selected){
                    item.selected = false;
                    item.complete = true;
                    filter.push(item.id);
                }
                return item;
            });

            fetch('http://localhost/api/tasks/complete', {
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    'body': JSON.stringify(filter),
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
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

            let update;
            
            state.tasks = state.tasks.map(item => {
                if (item.id === action.id) {
                    update = !!item.data.description;
                    item.data = cloneDeep(item.updating);
                    item.updating = null;
                }
                return item;
            });

            const newTask = state.tasks.find(item => item.id === action.id);
            
            
            if(update){
                fetch('http://localhost/api/tasks/', {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        'body': JSON.stringify(newTask),
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',
                })
            }else{
                fetch('http://localhost/api/tasks/', {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        'body': JSON.stringify(newTask),
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',
                })
            }



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
            fetch("http://localhost/api/tasks/", {
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    'body': JSON.stringify([action.id]),
                    'Content-Type': 'application/json'
                },
                method:"DELETE"
            });
            return state;
        case DELETE_SELECTED_TASKS:
            filter = state.tasks.filter(item => item.selected).map(item => item.id);

            state.tasks = state.tasks.filter(item => !item.selected);

            fetch("http://localhost/api/tasks/", {
                headers: {
                    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                    'body': JSON.stringify(filter),
                    'Content-Type': 'application/json'
                },
                method:"DELETE"
            });
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
        case CHECK_TASKS_DEADLINE:
            filter = [];
            state.tasks = state.tasks.map(item => {
                if((item.updating || item.missed || item.complete) ? false : item.data.deadline.diff(DateTime.local()) <= 0){
                    item.missed = true;
                    filter.push(item.id);
                }

                return item;
            });

            if(filter.length)
                fetch('http://localhost/api/tasks/missed', {
                    headers: {
                        "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                        'body': JSON.stringify(filter),
                        'Content-Type': 'application/json'
                    },
                    method: 'PUT',
                });
                
            return state;
        default:
            fetch('http://localhost/api/tasks/')
            .then(res => {
                if(res.status !== 200) return console.log("Данные не получены!");
                return res.json();
            })
            .then(tasks => {
                tasks = tasks.map(task => {
                    task.data = {...task.data};
                    task.data.deadline = DateTime.fromISO(task.data.deadline);
                    return task;
                });
                state.tasks = tasks;
            }).catch(err => {
                console.log(err);
            });
            return state;
    }
}

export default controlTasks;