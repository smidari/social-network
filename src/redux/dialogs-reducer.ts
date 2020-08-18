import {
    ActionsType,
    MessagesPageType,
    sendMessageCreatorType,
    updateNewMessageBodyCreatorType
} from "../types/entities";

export const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
export const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState: MessagesPageType = {
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
};

const dialogsReducer = (state = initialState, action: ActionsType): MessagesPageType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {...state, newMessageBody: action.text};
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state, messages: [...state.messages, {id: 6, message: state.newMessageBody}]};
            stateCopy.newMessageBody = "";
            return stateCopy;
        }
        default:
            return state;
    }
};

export default dialogsReducer;

export const sendMessageCreator = (): sendMessageCreatorType => ({type: SEND_MESSAGE} as const);
export const updateNewMessageBodyCreator = (text: string): updateNewMessageBodyCreatorType => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    text: text
} as const);

