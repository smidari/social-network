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


export type ActionType = {
    type: string
    payload?: () => void
    newText?: any
    body?: any
}
export type StoreType = {
    _state: RootStateType
    _callSubscriber: (state: RootStateType) => void
    getState: () => RootStateType
    subscribe: (observer: any) => void
    dispatch: (action: ActionType) => void
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

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
            newMessageBody:'',
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
        if (action.type === ADD_POST) {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY ){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state)
        }else if (action.type === SEND_MESSAGE ){
           let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody ='';
            this._state.dialogsPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state)
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body: string) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body});


export default store;

// window.store = store;