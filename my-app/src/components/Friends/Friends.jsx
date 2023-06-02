import * as React from "react";
import s from './friends.module.css'
import st from '../Messages/messages.module.css'
import {connect, useDispatch, useSelector} from "react-redux";
import {followUser, getUsersData, setFriend, setPage, unfollowUser} from "../../redux/users-reduser";
import {useEffect, useState} from "react";
import userlogo from "../../media/uzerlogo.png"
import {Button} from "react-bootstrap";
import PaginationP from "./Pagination";
import FriendsForm from "./FriendForm";
import Switch from "./Switch/Switch";
import {NavLink} from "react-router-dom";
import Form from "react-bootstrap/Form";
import DialogItem from "../Messages/DialogItem";
import profileLogo from "../../media/uzerlogo.png";
import MessagesList from "../Messages/MessagesList";
import MessagesForm from "../Messages/MessagesForm/MessagesForm";

const Friends = (props) => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.usersPage.users)
    const [value, setValue] = useState(true);
    const getUsersData2 = dispatch(getUsersData)
    useEffect(() => {
        /*  getUsersData2*/
        props.getUsersData()
    }, [])
    console.log(usersData)
    const usersList = usersData.map((user) => {
        const userLink = '/' + user.id
        return <div>
            <div className="row">
                <div className="col-sm-1">
                    <NavLink to={userLink} end> <img className={s.logo}
                                                     src={user.photos.small == null ? userlogo : user.photos.small}/>
                    </NavLink>

                </div>
                <div className="col">
                    <div>{user.name}</div>
                    {user.status ? <li> status: {user.status}</li> : null}

                    {user.followed != true
                        ? <Button variant="primary" onClick={() => {
                            props.followUser(user.id)
                        }}>Follow </Button>
                        : <Button variant="primary" onClick={() => {
                            props.unfollowUser(user.id)
                        }}>Unfollow </Button>}

                </div>
            </div>


        </div>
    })

    return <div classname={st.area}>
        <div className={st.area}>
            <div className={st.messagesBG}>
                <div className={"row p-3"}>
                    <div className={"col-8"}>
                        <div className={st.containerHalfLeft}>
                            <FriendsForm getUsersData={props.getUsersData} setPage={props.setPage} friend={props.friend}
                                         setFriend={props.setFriend}/>
                        </div>
                        <div className={st.containerHalfRight}>
                            <Switch
                                isOn={props.friend}
                                handleToggle={() => {
                                    props.setFriend(props.friend == true ? null : true)
                                    setValue(props.friend)
                                    props.getUsersData(10, 1, '', value)
                                }}
                            />
                            {usersList}
                            <PaginationP totalCount={props.totalCount} getUsersData={props.getUsersData} searchName={props.searchName}
                                         page={props.page} friend={props.friend}/>
                        </div>
                    </div>
                    <div className={"col-4"}>
                        <div className={st.userDialogContainer} onClick={props.onClick}>
                            <div className={"d-flex"}>
                                <div className={"p-1"}>
                                </div>
                                <div className={"p-2"}>
                                </div>
                            </div>
                        </div>
                        <div className={st.containerHalfRight}>
                        </div>
                        <div className={st.containerHalfLeft}>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        Friends

        <FriendsForm getUsersData={props.getUsersData} setPage={props.setPage} friend={props.friend}
                     setFriend={props.setFriend}/>
        {usersList}
    </div>
}
let mapStateToProps = (state) => (
    {
        totalCount: state.usersPage.totalCount,
        searchName: state.usersPage.searchName,
        page: state.usersPage.page,
        friend: state.usersPage.friend
    }
)
/*export default Friends*/
export default connect(mapStateToProps, {getUsersData, followUser, unfollowUser, setPage, setFriend})(Friends)
