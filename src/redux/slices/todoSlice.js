import { createSlice } from "@reduxjs/toolkit"; 
import {v4 as uuidv4} from 'uuid';

const todoslice= createSlice({
    name :"todo", 
    initialState:[
        {description : "desc" , id : uuidv4() , isDone : false},
        {description : "desc22" , id : uuidv4() , isDone : false},
    ],
    reducers:{
        add:(state,action)=>
        [...state, {description:action.payload , id:uuidv4() , isDone:false}],

        check:(state,action)=>state.map((el)=>(el.id===action.payload)? {...el , isDone : !el.isDone} :  el),
        update:(state,action)=>state.map((el)=>(el.id===action.payload.id)? {...el , description : action.payload.upd  }  : el)
        
    }
});

export default todoslice.reducer
export const {add , check ,  update} = todoslice.actions