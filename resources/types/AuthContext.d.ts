import Login from "../pages/Login"
import { UserModelType } from "./models/UserModel"
import React from "react";

export type LoginFormDataType = {
    email: string;
    password: string
}

export type AuthContextType = {
    user: UserModelType | null | false;
    login: ({email, password}: LoginFormDataType) => Promise<User|false|null>;
    logout: () => void;
}