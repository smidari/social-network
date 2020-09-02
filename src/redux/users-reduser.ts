import {
    ActionsType,
    followACType,
    setCurrentType,
    setTotalUsersCountType,
    setUsersACType,
    unfollowACType
} from "../types/entities";

export type UsersType = {
    id: number
    photos: any
    followed: boolean
    name: string
    status: string
    location: string
    country: string
}
export type UsersState = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
let initialState: UsersState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 19,
    currentPage: 1

};

const usersReducer = (state = initialState, action: ActionsType): UsersState => {
    switch (action.type) {

        case "FOLLOW": {
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
            return {...state, users: [...action.users]}
        }
        case 'SET_CURRENTPAGE': {
            return {...state, currentPage: action.currentPage}
        }
        case 'SET_TOTALCOUNT': {
            return {...state, totalUsersCount: action.totalCount}
        }


        default:
            return state;
    }
};

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
export const SET_TOTALCOUNT = 'SET_TOTALCOUNT';

export const followAC = (userId: number): followACType => ({type: FOLLOW, userId});
export const unfollowAC = (userId: number): unfollowACType => ({type: UNFOLLOW, userId});
export const setUsersAC = (users: Array<UsersType>): setUsersACType => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage: number): setCurrentType => ({type: SET_CURRENTPAGE, currentPage});
export const setTotalUsersCount = (totalCount: number): setTotalUsersCountType => ({type: SET_TOTALCOUNT, totalCount});

export default usersReducer;
