import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const todoList = createSlice({
  name: 'data',
  initialState,
  reducers: {
    create:(state, action) =>{
      state.push(action.payload)
    },
    remove:(state, action)=> {
      state.splice(action.payload, 1)
    },
    edit: (state, action) => {
      const {index,title,description} = action.payload;
      state[index].title = title;
      state[index].description = description
    }
  },
})


export const { create,remove, edit } = todoList.actions

export default todoList.reducer