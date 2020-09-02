import {
    ADD_POST,
    addPostActionCreator,
    UPDATE_NEW_POST_TEXT,
    updateNewPostActionCreator
} from "../redux/profile-reduser";
import {
    SEND_MESSAGE,
    sendMessageCreator,
    UPDATE_NEW_MESSAGE_BODY,
    updateNewMessageBodyCreator
} from "../redux/dialogs-reducer";
import {
    FOLLOW,
    followAC, SET_CURRENTPAGE, SET_TOTALCOUNT,
    SET_USERS, setCurrentPage, setTotalUsersCount,
    setUsersAC,
    UNFOLLOW,
    unfollowAC,
    UsersState,
    UsersType
} from "../redux/users-reduser";


export type PostType = {
    id: number
    message: string
    likeCount: number
};
export type DialogType = {
    id: number
    name: string
};
export type MessageType = {
    id: number
    message: string
};
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
};
export type MessagesPageType = {
    messages: Array<MessageType>
    dialogs: Array<DialogType>
    newMessageBody: string
};

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: MessagesPageType
};
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>



//Types Actions profile-reducer
export type addPostActionCreatorType = {
    type: typeof ADD_POST
};
export type updateNewPostActionCreatorType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string
}
//Types Actions dialogs-reducer
export type sendMessageCreatorType = {
    type: typeof SEND_MESSAGE
};
export type updateNewMessageBodyCreatorType = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
};

//Types Users-reducer
export type followACType = {
    type: typeof FOLLOW
    userId: number
}
export type unfollowACType = {
    type: typeof UNFOLLOW
    userId: number
}
export type setUsersACType = {
    type: typeof SET_USERS
    users: Array<UsersType>
}
export type setCurrentType = {
    type: typeof SET_CURRENTPAGE
    currentPage: number
}
export type setTotalUsersCountType = {
    type: typeof SET_TOTALCOUNT
    totalCount: number
}