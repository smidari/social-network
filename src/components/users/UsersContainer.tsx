import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStatePropsType = {
    users: Array<UsersType>
};
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
}

export type UserPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType):mapStatePropsType => {
    return {
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch: Dispatch):mapDispatchPropsType => {
    return {
        follow: (userId) => (dispatch(followAC(userId))),
        unfollow: (userId) => (dispatch(unfollowAC(userId))),
        setUsers: (users) => (dispatch(setUsersAC(users))),

    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(Users);

export default UsersContainer;

