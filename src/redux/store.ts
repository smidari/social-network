import profileReducer, {addPostActionCreator, updateNewPostActionCreator,} from "./profile-reduser";
import dialogsReducer, {sendMessageCreator, updateNewMessageBodyCreator} from "./dialogs-reducer";

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


export type ActionsType =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateNewPostActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof updateNewMessageBodyCreator>

export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action: ActionsType) => void
}

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'How are you', likeCount: 10},
                {id: 2, message: 'its my first posts', likeCount: 23},
                {id: 3, message: 'hi', likeCount: 3},
                {id: 4, message: 'its my first postsfsfsdfsdfsdfs', likeCount: 5},
            ],
            newPostText: 'it camasutra'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Lorem ipsum dolor sit amet, consectetur'},
                {id: 3, message: 'Lorem ipsum dolor sit'},
                {id: 4, message: 'Lorem ipsum dolor sit, Lorem ipsum dolor sit, Lorem ipsum dolor sit'}
            ],
            dialogs: [
                {id: 1, name: 'Dima'},
                {id: 2, name: 'Masha'},
                {id: 3, name: 'Sasha'},
                {id: 4, name: 'Dasha'},
                {id: 5, name: 'Svetlana'},
                {id: 6, name: 'Valera'}
            ],
            newMessageBody: '',
        },
    },
    _callSubscriber(state) {
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    },
};


export default store;

// window.store = store;