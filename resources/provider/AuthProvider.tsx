import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { AuthContextType } from '../types/AuthContext.js';
import { UserModelType } from '../types/models/UserModel.js';
import { LoginFormDataType } from '../types/AuthContext.js';
import Loader from '../pages/Loader.js';
import { Link } from 'react-router-dom';

export const AuthContext = React.createContext<AuthContextType>(null!);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user, setUser] = useState<UserModelType|false|null>(null);
    const [loginError, setLoginError] = useState<string>('');
    const [isLoadingUser, setIsLoadingUser] = useState<boolean>(true);

    useEffect(() => {
        const confirmUser = async () => {
            setIsLoadingUser(true);
            await axios.get('/api/user').then(res => {
                setUser(res.data.user ?? false);
            }).catch(error => {
                setUser(false);
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
            setUser(res.data ?? false);
        })
        .catch(err => {
            setUser(false);
            setLoginError('メールアドレスまたはパスワードに誤りがあります。');
        });
        setIsLoadingUser(false);
        return user;
    }

    const logout = async () => {
        setIsLoadingUser(true);
        await axios.post('/api/logout')
        .then(res => {
            setUser(null);
        })
        .catch(err => {
            setLoginError('ログアウトに失敗しました。');
        });
        setIsLoadingUser(false);
    }

    if (isLoadingUser) {
        return <Loader/>;
    }

    const clearLoginError = () => {
        setLoginError('');
    }
    if (loginError) {
        return (
            <div>
                <h4>{ loginError }</h4>
                <button onClick={clearLoginError}>再ログイン</button>
            </div>
        )
    }

    const value = {user, login, logout};
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider