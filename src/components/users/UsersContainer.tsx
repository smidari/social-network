import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reduser";

let mapStateToProps = (state:any) => {
    return{
        users: state.usersPage.users
    }
};
let mapDispatchToProps = (dispatch:any) => {
    return{
        follow: (userId: number) => (dispatch(followAC(userId))),
        unfollow: (userId: number) => (dispatch(unfollowAC(userId))),
        setUsers: (users: any) => (dispatch(setUsersAC(users))),

    }
};

// @ts-ignore
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;

