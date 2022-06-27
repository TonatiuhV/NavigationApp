import { authInitialState, AuthState } from "./AuthContext";


type AuthAction = 
    | {type: 'signIn'}
    | {type: 'logout'}
    | {type: 'changeFavIcon', payload: string}
    | {type: 'changeUserName', payload: string}


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
        case "logout":
            return authInitialState    
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon:action.payload
            }
        case 'changeUserName': 
            return {
                ...state,
                username: action.payload
            }
        default:// Simpre el defaul devueve e mismo state
            return state
    }
}