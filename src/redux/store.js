import {configureStore} from '@reduxjs/toolkit'
import authSlice, {} from "../redux/reducer/auth"
const store = configureStore({
    reducer:{
        [authSlice.name]:authSlice.reducer,
    }
})


export default store