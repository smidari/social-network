import {PostType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const propfileReduser = (state: any, action: any) => {
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
export default propfileReduser;
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostActionCreator = (text: string) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
