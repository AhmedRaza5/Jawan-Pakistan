import { createSlice } from "@reduxjs/toolkit";


const initial_state = {
    isLoggedIn:false, 
    loading:true,
    user_data:{

    }
}


const user_data_slice = createSlice({
    name:'user-data',
    initialState:initial_state,
    reducers:{
        set_user_auth:(state, actions)=>{
            state.isLoggedIn = actions.payload
            state.loading = false
        },
        userData: (state, actions)=>{
            state.user_data = actions.payload
        }

    }

})

export const { set_user_auth, userData} = user_data_slice.actions

export default user_data_slice.reducer