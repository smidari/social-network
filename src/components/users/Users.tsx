import React from "react";
import s from './users.module.css'
import {UserPropsType} from "./UsersContainer";
import * as axios from "axios";
import userPhoto from '../../assets/images/icon.png'

//: React.FC<UserPropsType>
class Users extends React.Component<UserPropsType> {

    constructor(props:any) {
        super(props);
        // @ts-ignore
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });

    }


    getUsers = () => {
        if (this.props.users.length === 0) {
            // @ts-ignore
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items);
            });
        }
    };

// : React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined
    render() {
        return (
            <>
                <button onClick={() => this.getUsers()}>get users</button>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto} alt={'user'}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>

                        </span>
                        <span>
                            <div>{'u.location'}</div>
                            <div>{'u.country'}</div>
                        </span>
                    </span>
                </div>)}
            </>
        )
    }
};

export default Users;