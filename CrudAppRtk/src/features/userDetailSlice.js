import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk("createUser", async (data, {rejectWithValue}) => {
    const response = await fetch("https://6624dc7e04457d4aaf9d2622.mockapi.io/crud", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error);
    }
});

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        users: [],
        loading: false,
        error: null,
    },

    reducers: {

    },

    // extraReducers: {
    //     [createUser.pending]: (state) => {
    //         state.loading = true;
    //     },
    //     [createUser.fulfilled]: (state, action) => {
    //         state.loading = false;
    //         state.users.push(action.payload);
    //     },
    //     [createUser.rejected]: (state, action) => {
    //         state.loading = false;
    //         state.usesr = action.payload;
    //     },
    // },
});

export default userDetail.reducer;
