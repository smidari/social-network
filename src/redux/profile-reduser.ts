import {
    ActionsType,
    addPostActionCreatorType,
    PostType, ProfilePageType,
    updateNewPostActionCreatorType
} from "../types/entities";

export const ADD_POST = 'ADD_POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'How are you', likeCount: 10},
        {id: 2, message: 'its my first posts', likeCount: 23},
        {id: 3, message: 'hi', likeCount: 3},
        {id: 4, message: 'its my first postsfsfsdfsdfsdfs', likeCount: 5},
    ],
    newPostText: 'it camasutra'
};

const profileReducer = (state = initialState, action: ActionsType): ProfilePageType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {...state, posts: [...state.posts, newPost]};
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostText: action.newText};
        }
        default:
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = (): addPostActionCreatorType => ({type: ADD_POST} as const);
export const updateNewPostActionCreator = (text: string): updateNewPostActionCreatorType => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
} as const);
