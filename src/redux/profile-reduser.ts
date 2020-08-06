import {PostType} from "./store";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'How are you', likeCount: 10},
        {id: 2, message: 'its my first posts', likeCount: 23},
        {id: 3, message: 'hi', likeCount: 3},
        {id: 4, message: 'its my first postsfsfsdfsdfsdfs', likeCount: 5},
    ],
    newPostText: 'it camasutra'
};

const profileReducer = (state: any =initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
};
export default profileReducer;
export const addPostActionCreator = () => ({type: ADD_POST} as const);
export const updateNewPostActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const);
