// toolkit har ett API som heter configureStore
import { configureStore } from "@reduxjs/toolkit";
import booksReducer from './booksSlice';

export const store = configureStore({
    reducer: booksReducer
});
