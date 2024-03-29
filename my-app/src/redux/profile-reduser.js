import {profileApi} from "../Api/api";

const GET_USER_PROFILE = 'GET_USER_PROFILE'
const GET_USER_PROFILE_POST = 'GET_USER_PROFILE_POST'
const GET_USER_PROFILE_STATUS = 'GET_USER_PROFILE_STATUS'
const SET_USER_INITIALIZED = 'SET_USER_INITIALIZED'
const initialState = {
    postsData: [
        {id:1, postText:'Hi', likesCount:9},
        {id:2, postText:'I am react developer', likesCount:6},
        {id:3, postText:'Belorussian is the best!', likesCount:9}
    ],
    profileId: 3,
    profileInfo: {photos:{small:"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png"}, contacts:{github:""}},
    profileStatus: 'teststatus',
    isInitial: false
}
export default function profileReducer(state = initialState, action) {

    switch (action.type) {
        case GET_USER_PROFILE:
            return { ...state, profileId: 24842,  profileInfo: action.data , isInitial: true }
        case GET_USER_PROFILE_POST:
            const text = action.post.name
            let newMessage = {id:4, postText: text, likesCount: 2}
            return { ...state, postsData:  [...state.postsData, newMessage] }
        case GET_USER_PROFILE_STATUS:
            return { ...state, profileStatus: action.status }

        default:
            return state
    }
}
export const getUserProfile = (data) => ({ type: GET_USER_PROFILE, data });
export const setInitialised = () => ({ type: SET_USER_INITIALIZED });
export const getUserProfilePost = (post) => ({ type: GET_USER_PROFILE_POST, post });
export const setStatus = (status) => ({ type: GET_USER_PROFILE_STATUS, status });
export const getProfileStatus = (userId) => (dispatch) => {
    profileApi.getStatus(userId)
        .then(data => {

            dispatch(setStatus(data))
        })
}
export const setUserProfile = (userId) => (dispatch) => {

    profileApi.getProfile(userId)
        .then(data => {

                dispatch(getUserProfile(data))
            }
        )
}
export const setProfileContacts = (contacts) => (dispatch) =>{

    profileApi.setProfile(contacts)

        . then(data => {
           })


}
export const setProfileStatus = (status) => (dispatch) => {

    profileApi.setStatus(status)
        .then(data => {data.resultCode == 0 ? dispatch(getProfileStatus(24842)) : console.log('mistake')})



}
export const setUserProfilePost = (post) => (dispatch) => {
    dispatch(getUserProfilePost(post))
}
export const setUserPhoto = (photo) => (dispatch) => {

    profileApi.setPhoto(photo)
        .then(data => {
            console.log(data)
                /*dispatch(getUserProfile(data))*/
            }
        )
}
