import React, { createContext } from "react";

// Defenir como luce o qu información  tendré aquí
export interface AuthState {
    isLoggedIn:boolean;
    username?:string;
    favoriteIcon?:string;
}

// Estado inicial
export const authInitialState: AuthState ={
    isLoggedIn: false,
    username:undefined,
    favoriteIcon:undefined
} 

// lo usaremos, para decirle a react como luce y que espone el contexto

export interface AuthContextProps {
    authState: AuthState;
    signIn: () =>void;
}

export const AuthContext = createContext({} as AuthContextProps)


//Componente proveedor del estado
export const AuthProvider  = ({children}:any) =>{
    return (
        <AuthContext.Provider
            value={{
                authState:authInitialState,
                signIn: ()=> {},
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}