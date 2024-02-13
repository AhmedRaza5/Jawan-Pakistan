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
      const { id, newText } = action.payload;
      const todoToEdit = state.find(todo => todo.id === id);
      if (todoToEdit) {
        todoToEdit.text = newText;
      }
    }
  },
})


export const { create,remove, edit } = todoList.actions

export default todoList.reducer