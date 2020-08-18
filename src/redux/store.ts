import profileReducer from "./profile-reduser";
import dialogsReducer from "./dialogs-reducer";
import {StoreType} from "../types/entities";

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