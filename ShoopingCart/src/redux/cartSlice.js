import { createReducer } from "@reduxjs/toolkit";
import { combineReducers, creareSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = creareSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload);
        },

        remove(state, action){
            return state.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;