import { configureStore } from '@reduxjs/toolkit'
import todoList from './slice/todoList'
import user_data_slice from './slice/user_data_slice'

 const store = configureStore({
  reducer: {
    todoList: todoList,
     user_data: user_data_slice
  },
})
export {store}