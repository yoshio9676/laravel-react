import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContextType } from '../types/AuthContext';
import { UserModelType } from '../types/models/UserModel';
import { LoginFormDataType } from '../types/AuthContext';

export const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<UserModelType|false|null>(null);

    useEffect(() => {
        axios.get('/api/user').then(res => {
            console.log('user', res);
            setUser(res.data.user ?? false);
        }).catch(error => {
            setUser(false);
            console.error(error);
        });
    }, []);


    const login = async ({email, password}: LoginFormDataType) => {
        await axios.get('/sanctum/csrf-cookie')
        .then(res => {
            console.log('csrf-cookie', res);
            axios.post('/api/login', {email: email, password: password})
            .then(res => {
                console.log('login', res);
                setUser(res.data ?? false);
            })
            .catch(err => {
                setUser(false);
            });
        });
        return user;
    }

    const logout = async () => {
        await axios.post('/api/logout').then(res => {
            setUser(false);
        });
    }

    const value = {user, login, logout};
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider