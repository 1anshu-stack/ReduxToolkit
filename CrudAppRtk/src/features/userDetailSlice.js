import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//create user
export const createUser = createAsyncThunk("createUser", async (data, { rejectWithValue }) => {
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

//read user
export const readUser = createAsyncThunk("readUser", async (args, { rejectWithValue }) => {
    const response = await fetch("https://6624dc7e04457d4aaf9d2622.mockapi.io/crud", {
        method: "GET"
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
});

//delete user
export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    const response = await fetch(`https://6624dc7e04457d4aaf9d2622.mockapi.io/crud/${id}`, {
        method: "DELETE"
    });
    try {
        const result = await response.json();
        return result;
    } catch (error) {
        return rejectWithValue(error)
    }
});


//update user
export const updateUser = createAsyncThunk("updateUser", async (data, { rejectWithValue }) => {
    const response = await fetch(`https://6624dc7e04457d4aaf9d2622.mockapi.io/crud/${data.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
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
        searchData: [],
    },

    reducers: {
        searchUser: (state, action) => {
            state.searchData = action.payload
        },
    },

    extraReducers: (builder) => {
        // [createUser.pending]: (state) => {
        //     state.loading = true;
        // },
        // [createUser.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.users.push(action.payload);
        // },
        // [createUser.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload.message;
        // },
        builder.addCase(createUser.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload)
            }),
            builder.addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            }),
            builder.addCase(readUser.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(readUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            }),
            builder.addCase(readUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
            builder.addCase(deleteUser.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const { id } = action.payload;
                if (id) {
                    state.users = state.users.filter((ele) => ele.id !== id)
                }
                // console.log(action.payload);
                // state.users=action.payload;
            }),
            builder.addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            }),
            builder.addCase(updateUser.pending, (state) => {
                state.loading = true;
            }),
            builder.addCase(updateUser.fulfilled, (state, action) => {
                state.loading = false;
                // state.users.push(action.payload)
                state.users = state.users.map((ele)=>(
                    ele.id === action.payload.id ? action.payload : ele
                ));
            }),
            builder.addCase(updateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
            })
    },
});

export default userDetail.reducer;

export const { searchUser } = userDetail.actions;