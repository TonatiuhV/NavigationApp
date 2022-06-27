import { authInitialState, AuthState } from "./AuthContext";


type AuthAction = 
    | {type: 'signIn'}
    | {type: 'logout'}
    | {type: 'changeFavIcon', payload: string}

// Genera estado
export const authReducer = (state:AuthState, action:AuthAction):AuthState =>{
    switch (action.type) {
        case 'signIn':
            // NO MUTAR el state devolver un nuevo estado
            return {
                ...state,
                isLoggedIn:true,
                username: 'no-username'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon:action.payload
            }
        case "logout":
            return authInitialState
    
        default:// Simpre el defaul devueve e mismo state
            return state
    }
}