import { configureStore } from "@reduxjs/toolkit";
import BookReducer from './BookSlice'
import searchReducer from './searchSlice'

export const store=configureStore({

    reducer:{
        books:BookReducer,
        search:searchReducer
    }
})