

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    todoList: [],
}



export const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {

        saveTodo: (state, action) => {
            state.todoList.push(action.payload)

          
        },
        setCheck: (state, action) => {
            state.todoList.map((task) => {
                if (action.payload === task.id) {

                    if (task.done){
                        task.done=false
                    } else {task.done=true}
                   

                }
            })

        },

       deleteTask : (state, action)=> {
        console.log("bnjjjjj")
        state.todoList=state.todoList.filter((task)=> {task.id  !=action.payload})
       }


    },
})

export const { saveTodo, setCheck, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;