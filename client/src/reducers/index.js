import { cloneDeep } from "lodash";

import {
  ADD_TASK,
  CANCEL_UPDATE_TASK,
  CHANGE_DEADLINE_TASK,
  CHANGE_DESCRIPTION_TASK,
  CHANGE_DROPDOWN,
  FETCH_TASKS_SUCCESS,
  SHOW_UPDATE_ROW
} from '../action-types';
import createReducer from '../utils/createReducer';



let initialState = {
  search: "",
  tasks: {
    data: [],
    update: null,
    dropdown: null
  },
  completed: [],
  missed: []
};

const reducer = createReducer(initialState, {
  [FETCH_TASKS_SUCCESS]: (state, { payload: {data} }) => {
    const { tasks } = state;

    return {
      ...state,
      tasks: {
        ...tasks,
        data
      }
    };
  },
  [SHOW_UPDATE_ROW]: (state, { payload: {deadline, id} }) => {
    const { tasks } = state;
    if (!id) id = tasks.data[0].id + 1;
    return {
      ...state,
      tasks: {
        ...tasks,
        update: {
          id,
          description: "",
          deadline
        }
      }
    };
  },
  [CHANGE_DESCRIPTION_TASK]: (state, { payload: {value: description} }) => {
    const { tasks } = state;
    const { update } = tasks;
    return {
      ...state,
      tasks: {
        ...tasks,
        update: {
          ...update,
          description
        }
      }
    };
  },
  [CHANGE_DEADLINE_TASK]: (state, { payload: {newDate: deadline} }) => {
    const { tasks } = state;
    const { update } = tasks;
    return {
      ...state,
      tasks: {
        ...tasks,
        update: {
          ...update,
          deadline
        }
      }
    };
  },
  [CANCEL_UPDATE_TASK]: (state) => {
    const { tasks } = state;
    return {
      ...state,
      tasks: {
        ...tasks,
        update: null
      }
    };
  },
  [ADD_TASK]: (state) => {
    const { tasks } = state;
    const { update, data } = tasks;
    const task = cloneDeep(update);
    return {
      ...state,
      tasks: {
        ...tasks,
        data: [task, ...data],
        update: null
      }
    };
  },
  [CHANGE_DROPDOWN]: (state, {payload: {id} }) => {
    const {tasks} = state;
    id = id === tasks.dropdown ? 0 : id;
    return {
      ...state,
      tasks: {
        ...tasks,
        dropdown: id
      }
    }
  }
});

    // case CHANGE_SEARCH: {
    //   const { value } = payload;
    //
    //   state.search = value;
    //   return state;
    // }

    // case UPDATE_TASK: {
    //   const { id } = payload;
    //
    //   state.tasks = state.tasks.map(item => {
    //     if (item.id === id) {
    //       item.updating = {
    //         description: item.data.description,
    //         deadline: item.data.deadline
    //       };
    //       item.dropdown = false;
    //     }
    //
    //     return item;
    //   });
    //   return state;
    // }
    // case UPDATE_SELECTED_TASKS:
    //   state.tasks = state.tasks.map(item => {
    //     if (item.selected)
    //       item.updating = {
    //         description: item.data.description,
    //         deadline: item.data.deadline
    //       };
    //     item.selected = false;
    //     return item;
    //   });
    //   return state;
    // case COMPLETE_TASK: {
    //   const { id } = payload;
    //
    //   state.tasks = state.tasks.map(item => {
    //     if (item.id === id) {
    //       item.complete = true;
    //       item.dropdown = false;
    //       fetch("http://localhost/api/tasks/complete", {
    //         headers: {
    //           "Content-type":
    //             "application/x-www-form-urlencoded; charset=UTF-8",
    //           body: JSON.stringify([item.id]),
    //           "Content-Type": "application/json"
    //         },
    //         method: "PUT"
    //       });
    //     }
    //     return item;
    //   });
    //   return state;
    // }
    // case COMPLETE_SELECTED_TASKS:
    //   filter = [];
    //
    //   state.tasks = state.tasks.map(item => {
    //     if (item.selected) {
    //       item.selected = false;
    //       item.complete = true;
    //       filter.push(item.id);
    //     }
    //     return item;
    //   });
    //
    //   fetch("http://localhost/api/tasks/complete", {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //       body: JSON.stringify(filter),
    //       "Content-Type": "application/json"
    //     },
    //     method: "PUT"
    //   });
    //   return state;

    // case SHOW_DROPDOWN:
    //   state.tasks = [...state.tasks];
    //   state.tasks.forEach(item => {
    //     if (item.id === action.id) {
    //       item.dropdown = !item.dropdown;
    //     } else {
    //       item.dropdown = false;
    //     }
    //   });
    //   return state;
    // case DELETE_TASK:
    //   state.tasks = state.tasks.filter(item => item.id !== action.id);
    //   fetch("http://localhost:8080/api/tasks/", {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //       body: JSON.stringify([action.id]),
    //       "Content-Type": "application/json"
    //     },
    //     method: "DELETE"
    //   });
    //   return state;
    // case DELETE_SELECTED_TASKS:
    //   filter = state.tasks.filter(item => item.selected).map(item => item.id);
    //
    //   state.tasks = state.tasks.filter(item => !item.selected);
    //
    //   fetch("http://localhost:8080/api/tasks/", {
    //     headers: {
    //       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //       body: JSON.stringify(filter),
    //       "Content-Type": "application/json"
    //     },
    //     method: "DELETE"
    //   });
    //   return state;
    // case SELECT_TASK:
    //   state.tasks = state.tasks.map(item => {
    //     if (item.id === action.id) item.selected = !item.selected;
    //     return item;
    //   });
    //   return state;
    // case SELECT_ALL_TASKS:
    //   if (
    //     state.tasks.every(item => item.selected || item.complete || item.missed)
    //   ) {
    //     state.tasks = state.tasks.map(item => {
    //       if (!item.complete && !item.missed) item.selected = false;
    //       return item;
    //     });
    //   } else {
    //     state.tasks = state.tasks.map(item => {
    //       if (!item.complete && !item.missed) item.selected = true;
    //       return item;
    //     });
    //   }
    //   return state;
    // case CHECK_TASKS_DEADLINE:
    //   filter = [];
    //   state.tasks = state.tasks.map(item => {
    //     if (
    //       item.updating || item.missed || item.complete
    //         ? false
    //         : item.data.deadline.diff(DateTime.local()) <= 0
    //     ) {
    //       item.missed = true;
    //       filter.push(item.id);
    //     }
    //
    //     return item;
    //   });
    //
    //   if (filter.length)
    //     fetch("http://localhost:8080/api/tasks/missed", {
    //       headers: {
    //         "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
    //         body: JSON.stringify(filter),
    //         "Content-Type": "application/json"
    //       },
    //       method: "PUT"
    //     });
    //
    //   return state;


export default reducer;
