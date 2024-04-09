import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContextType } from '../types/AuthContext';
import { UserModelType } from '../types/models/UserModel';
import { LoginFormDataType } from '../types/AuthContext';
import Loader from '../pages/Loader';

export const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<UserModelType|false|null>(null);
    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

    useEffect(() => {
        const confirmUser = async () => {
            setIsLoadingUser(true);
            await axios.get('/api/user').then(res => {
                console.log('user', res);
                setUser(res.data.user ?? false);
            }).catch(error => {
                setUser(false);
                console.error(error);
            });
            setIsLoadingUser(false);
        }
        confirmUser();
    }, []);


    const login = async ({email, password}: LoginFormDataType) => {
        setIsLoadingUser(true);
        await axios.get('/sanctum/csrf-cookie');
        await axios.post('/api/login', {email: email, password: password})
        .then(res => {
            console.log('login success');
            setUser(res.data ?? false);
        })
        .catch(err => {
            console.error(err);
            setUser(false);
        });
        setIsLoadingUser(false);
        return user;
    }

    const logout = async () => {
        setIsLoadingUser(true);
        await axios.post('/api/logout')
        .then(res => {
            setUser(false);
        });
        setIsLoadingUser(false);
    }

    const value = {user, login, logout};
    return (
        isLoadingUser
        ?
        <Loader/>
        :
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider