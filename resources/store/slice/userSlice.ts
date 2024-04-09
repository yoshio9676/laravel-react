import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ActionType = {
    payload: {email: string, password: string},
    type: 'login' | 'logout'
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            // login
            const loginFunc = async () => {
                await axios.get('/sanctum/csrf-cookie');
                await axios.post('/login', {email: action.payload.email, password: action.payload.password});
                await axios.get('/api/user')
                .then(res => {
                    state.user = res.data.user;
                });
            }
            loginFunc();
        },
        logout: (state, action) => {
            // logout
            const logoutFunc = async () => {
                await axios.post('/logout')
                .then(() => {
                    state.user = null;
                });
            }
            logoutFunc();
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;