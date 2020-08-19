import {ActionsType, followACType, setUsersACType, unfollowACType} from "../types/entities";

export type UsersType = {
    id: number
    photoUrl: string
    followed: boolean
    name: string
    status: string
    location: string
    country: string
}
export type UsersState = {
    users: Array<UsersType>
}
let initialState: UsersState = {
    users: [

    ],

};

const usersReducer = (state = initialState, action: ActionsType): UsersState => {
    switch (action.type) {

        case "FOLLOW": {
            debugger;
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId)
                    ? {...u, followed: true}
                    : u)
            };
        }
        case "UNFOLLOW": {
            return {
                ...state,
                users: state.users.map(u => (u.id === action.userId)
                    ? {...u, followed: false}
                    : u)
            };
        }
        case "SET_USERS": {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
};

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';

export const followAC = (userId: number): followACType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: number): unfollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UsersType>): setUsersACType => ({type: SET_USERS, users});

export default usersReducer;
