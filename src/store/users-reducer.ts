import {InferActionTypes} from "./store";

const initialState = {
    users: [
        {id: 1, name: "Sergey", mentor: false},
        {id: 2, name: "Sasha", mentor: true},
        {id: 3, name: "Lesha", mentor: false},
        {id: 4, name: "Valera", mentor: true},
        {id: 5, name: "Dimych", mentor: true},
    ]
}


export const UsersReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "CHANGE_USER_STATUS": {
            return {
                ...state,
                users: state.users.map(user => {
                   if (user.id === action.userId) {
                       return {
                           ...user, mentor: action.status
                       }
                   } else {
                       return user
                   }
                })
            }
        }
        default:
            return state
    }
}

export const actions = {
    changeUserStatus: (status: boolean, userId: number) => ({type: 'CHANGE_USER_STATUS', status, userId} as const)
}

//Types
type ActionsType = InferActionTypes<typeof actions>
type InitialStateType = typeof initialState;