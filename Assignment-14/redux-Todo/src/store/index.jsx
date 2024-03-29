import { configureStore } from '@reduxjs/toolkit'
import todoList from './slice/todoList'

export const store = configureStore({
  reducer: {
    todoList: todoList
  },
})