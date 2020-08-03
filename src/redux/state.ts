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
};
export type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
};

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (state: RootStateType) => void
    addPost: () => void
    updateNewPostText: (newText: string) => void
    subscribe: (observer: any) => void

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
        messagesPage: {
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
        },
    },
    getState (){return this._state},
    _callSubscriber(state) {
    },
    addPost() {
        const newPost: PostType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
};


export default store;

// window.store = store;