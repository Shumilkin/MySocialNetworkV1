import {profileApi} from "../Api/api";
import {getUserProfilePost} from "./profile-reduser";

const SET_MESSAGE = 'SET_MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'

const initialState = {
    dialogsData: [
        {id: 0, user: 'Nikolay'},
        {id: 1, user: 'OLeg'},
        {id: 2, user: 'Ivan'}
    ],
    messagesData: [
        {
            id: 1, messages: [
                {messageId: 1, message: 'lol'},
                {messageId: 2, message: 'kek'}]
        },
        {
            id: 2, messages: [
                {messageId: 1, message: 'ppp'},
                {messageId: 2, message: 'aaa'}]
        },
        {
            id: 3, messages: [
                {messageId: 1, message: '123'},
                {messageId: 2, message: '678'}]
        },
    ]

}
export default function messagesReducer(state = initialState, action) {
    const initialState2 = {
        dialogsData: [
            {id: 0, user: 'Nikolay'},
            {id: 1, user: 'OLeg'},
            {id: 2, user: 'Ivan'}
        ],
        messagesData: [
            {
                id: 1, messages: [
                    {messageId: 1, message: 'lol2'},
                    {messageId: 2, message: 'kek2'},
                    {messageId: 2, message: 'kek2'}]
            },
            {
                id: 2, messages: [
                    {messageId: 1, message: 'ppp'},
                    {messageId: 2, message: 'aaa'}]
            },
            {
                id: 3, messages: [
                    {messageId: 1, message: '123'},
                    {messageId: 2, message: '678'}]
            },
        ]

    }
    switch (action.type) {

        case SET_MESSAGE:
            const listValue = action.data.value
            const messageData = action.data.messageData
            const lastId = state.messagesData[listValue].messages.at(-1).messageId
            let newMessages = [...state.messagesData[listValue].messages,
                {messageId: lastId + 1, message: messageData}]
            state.messagesData[listValue].messages = newMessages
            const newData = {...state.messagesData}
            return {...state, messagesData: newData}
        case DELETE_MESSAGE:
            /*const messageId = action.data.messageId*/
            /*const myIndex = state.messagesData[listValue2].messages.indexOf(messageId)*/
            const listValue2 = action.data.value
            const key = action.data.key
            let newArray = state.messagesData[listValue2].messages.filter(function (f) {
                return f.messageId !==  key
            });
            state.messagesData[listValue2].messages = newArray
            const newData2 = {...state.messagesData}
            return {...state, messagesData: newData2}
        default:
            return state
    }
}

export const getDialogsMessage = (message) => (dispatch) => {
    dispatch(setDialogsMessage(message))
}
export const setDialogsMessage = (messageData, value) => (dispatch) => {
    dispatch(setDialogsMessage2(messageData, value))
}
export const setDialogsMessage2 = (data) => ({type: SET_MESSAGE, data});

export const deleteMessage = (data) => ({type: DELETE_MESSAGE, data});

