import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPage,
    setTotalUsersCount,
    setUsersAC,
    unfollowAC,
    UsersType
} from "../../redux/users-reduser";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStatePropsType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
};
type mapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

export type UserPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
};
let mapDispatchToProps = (dispatch: Dispatch): mapDispatchPropsType => {
    return {
        follow: (userId) => (dispatch(followAC(userId))),
        unfollow: (userId) => (dispatch(unfollowAC(userId))),
        setUsers: (users) => (dispatch(setUsersAC(users))),
        setCurrentPage: (currentPage) => (dispatch(setCurrentPage(currentPage))),
        setTotalUsersCount: (totalCount) =>(dispatch(setTotalUsersCount(totalCount)))

    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);
const UsersContainer = connector(Users);

export default UsersContainer;

