import React from "react";
import s from './users.module.css'
import {UserPropsType} from "./UsersContainer";
import * as axios from "axios";
import userPhoto from '../../assets/images/icon.png'

class Users extends React.Component<UserPropsType> {
    componentDidMount(): void {
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items);
        });
    };


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <>
                <div>
                    {
                        pages.map((p, index) => <span key={index}
                                                      className={this.props.currentPage === p ? s.selectedPage : 'sda'}
                                                      onClick={() => {
                                                          this.props.setCurrentPage(p);
                                                          // @ts-ignore
                                                          axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${p}`).then(response => {
                                                              this.props.setUsers(response.data.items);
                                                          });
                                                      }}
                        >{p}</span>)
                    }
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={s.userPhoto}
                                 alt={'user'}/>
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
}

export default Users;