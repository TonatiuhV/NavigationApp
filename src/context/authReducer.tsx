import { AuthState } from "./AuthContext";


type AuthAction = {type: 'signIn'}

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
    
        default:// Simpre el defaul devueve e mismo state
            return state
    }
}