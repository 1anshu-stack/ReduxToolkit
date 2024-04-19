import { combineReducers, creareSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = creareSlice({
    name: 'cart',
    initialState,
    reducers: {
        add(state, action){
            state.push(action.payload);
        }
    }
});

export const {add} = cartSlice.actions;
export default cartSlice.reducer;