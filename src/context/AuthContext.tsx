import React, { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";

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
    changeFavIcon: (iconName:string) =>void;
    logout: () => void; 
    changeUserName: (username: string) => void;
}

export const AuthContext = createContext({} as AuthContextProps)


//Componente proveedor del estado
export const AuthProvider  = ({children}:any) =>{
    // retorna un nuevo estado y tiene un inicializacion
    const [authState, dispatch] = useReducer(authReducer, authInitialState)
    
    const signIn = () =>{
        dispatch({ type: 'signIn'})
    }

    const changeFavIcon= (iconName:string) => {
        dispatch({type:'changeFavIcon', payload:iconName});
    }

    const logout = () =>{
        dispatch({type: 'logout'})
    }

    const changeUserName = (username: string) => {
        dispatch({type: 'changeUserName', payload:username})
    }
    
    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                changeFavIcon,
                logout,
                changeUserName,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}