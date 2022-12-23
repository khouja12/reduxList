//iportation

import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from "../ActionTypes/ListTask"



//initialState

const initialState = {
    ListTasks: [
        { id: Math.random(), Text: "task1", isDone: false }
        , { id: Math.random(), Text: "task2", isDone: false }


    ]
}



//pure Fanction

const ListReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_TASK:
            return { ...state, ListTasks: [...state.ListTasks, payload] }
        case DELETE_TASK:
            return { ...state, ListTasks: state.ListTasks.filter(el => el.id !== payload) }
        case DONE_TASK:
            return { ...state, ListTasks: state.ListTasks.map(el => el.id === payload ? { ...el, isDone: !el.isDone } : el) }
        case EDIT_TASK:
            return { ...state, ListTasks: state.ListTasks.map(el => el.id === payload.id ? { ...el, Text: payload.newTask } : el) }
        default:
            return state;
    }
}

export default ListReducer