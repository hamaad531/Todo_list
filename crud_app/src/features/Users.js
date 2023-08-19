import { createSlice } from '@reduxjs/toolkit'
import { UsersData } from '../Fakedata'


export const UserSlice = createSlice({
    name: 'users',
    initialState: { value: UsersData },
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },

        deleteUser: (state, action) => {
            state.value = state.value.filter((user) => user.id !== action.payload.id);
        },
        UpdateUsername: (state, action) => {
            state.value = state.value.map((user) => {
                if (user.id === action.payload.id) {
                    return { ...user, username: action.payload.username };
                }
                return user; // Return the original user if no update is needed
            });
        },

    },
});
export const { addUser, deleteUser, UpdateUsername } = UserSlice.actions;

export default UserSlice.reducer;