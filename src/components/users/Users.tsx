import React from "react";
import s from './users.module.css'
import {UserPropsType} from "./UsersContainer";

const Users: React.FC<UserPropsType> = props => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU',
                followed: false,
                name: 'Dahsa',
                status: 'I am a boss',
                location: 'Minsk',
                country: 'Belarus'
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU',
                followed: true,
                name: 'Sveta',
                status: 'Crazzy',
                location: 'Moscow',
                country: 'Russia'
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR80vbIZec_RnLcJISeMtsmdZ1OIA87Y_U0tw&usqp=CAU',
                followed: false,
                name: 'Masah',
                status: 'Cute',
                location: 'Kiev',
                country: 'Ucraine'
            },
        ]);
    }

    return (
        <>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
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
                        <div>{u.location}</div>
                        <div>{u.country}</div>
                    </span>
                </span>
            </div>)}
        </>

    )
};

export default Users;