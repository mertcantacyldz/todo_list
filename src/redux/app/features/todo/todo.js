import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const initialState =[]
 
export const todoSlice = createSlice({

    name: " todo",
    initialState,
    reducers:{

        set_todo : (state, action) => {

            return [...state, {id:uuidv4(), text:action.payload, completed:false} ]
        },

        update_todo : (state,action) =>{
            const { id, text } = action.payload;

             return state.map( (todo)=> todo.id === id ? {...todo, text: text} : todo )
            
        },
        delete_todo :(state,action)=> {

           return  state.filter( (todo)=>todo.id !==action.payload)
        },

        completed_todo :(state,action)=> {
            const { id} = action.payload;
            return  state.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo)
         }

 
    },


}) 

export const {set_todo, update_todo ,delete_todo, completed_todo}=todoSlice.actions

export default todoSlice.reducer