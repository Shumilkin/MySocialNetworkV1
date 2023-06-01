import {profileApi} from "../Api/api";
import {getUserProfilePost} from "./profile-reduser";

const SET_MESSAGE = 'SET_MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'

const initialState = {
    dialogsData: [
        {id: 0, user: 'Nikolay'},
        {id: 1, user: 'OLeg'},
        {id: 2, user: 'Ivan'},
        {id:3, user: 'Irina'},
        {id: 4, user: 'Anton'},
        {id: 5, user: 'Olga'}
    ],
    messagesData: [
        {
            id: 1, messages: [
                {messageId: 1, message: 'True! Just when I was feeling happy that the Avengers got rid of Thanos for good, the next moment I was bawling my eyes out seeing Iron Man had sacrificed himself to save the world and everyone else.'},
                {messageId: 2, message: 'My sister took me to see the movie as soon as it was released. Both me and my sister have been great fans of Avengers since childhood.'},
                {messageId: 3, message: ' Oh I see. The movie stood up to all the expectations that the audience had after watching the trailer. In fact I would say the movie surpassed expectations.'},
                {messageId: 4, message: ' We should make use of this trip to learn the maximum possible about the places we are visiting.'}]

        },
        {
            id: 2, messages: [
                {messageId: 1, message: 'Hey, Marvin. My weekend was great. I watched a great movie.'},
                {messageId: 2, message: 'Oh really? What was the name of the movie you watched?'},
                {messageId: 3, message: ' I watched Avengers Endgame. It is the last movie of the Avengers.'}
            ]


        },
        {
            id: 3, messages: [
                {messageId: 1, message: 'We should make use of this trip to learn the maximum possible about the places we are visiting.'},
                {messageId: 2, message: 'I will have to ask my father today itself for the money.'},
                {messageId: 3, message: ' That is what makes it all the more necessary that we go for the tour. It will be a wonderful memory.'}]
        },
        {
            id: 4, messages: [
                {messageId: 1, message: 'True! Just when I was feeling happy that the Avengers got rid of Thanos for good, the next moment I was bawling my eyes out seeing Iron Man had sacrificed himself to save the world and everyone else.'},
                {messageId: 2, message: 'My sister took me to see the movie as soon as it was released. Both me and my sister have been great fans of Avengers since childhood.'},
                {messageId: 3, message: ' Oh I see. The movie stood up to all the expectations that the audience had after watching the trailer. In fact I would say the movie surpassed expectations.'},
                {messageId: 4, message: ' We should make use of this trip to learn the maximum possible about the places we are visiting.'}]
        },
        {
            id: 5, messages: [
                {messageId: 1, message: 'We should make use of this trip to learn the maximum possible about the places we are visiting.'},
                {messageId: 2, message: 'I will have to ask my father today itself for the money.'},
                {messageId: 3, message: ' That is what makes it all the more necessary that we go for the tour. It will be a wonderful memory.'}]
        },
        {
            id: 6, messages: [
                {messageId: 1, message: 'Hey, Marvin. My weekend was great. I watched a great movie.'},
                {messageId: 2, message: 'Oh really? What was the name of the movie you watched?'},
                {messageId: 3, message: ' I watched Avengers Endgame. It is the last movie of the Avengers.'}]
        },
        {
            id: 7, messages: [
                {messageId: 1, message: 'We should make use of this trip to learn the maximum possible about the places we are visiting.'},
                {messageId: 2, message: 'I will have to ask my father today itself for the money.'},
                {messageId: 3, message: ' That is what makes it all the more necessary that we go for the tour. It will be a wonderful memory.'}]
        }
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

