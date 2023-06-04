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
import {BiMessageSquareDetail} from "react-icons/bi";
import {CiLocationOn} from "react-icons/ci";
import {BsCalendar2Week} from "react-icons/bs";
import Activities from "./Activities";
import Badge from "react-bootstrap/Badge";

const Friends = (props) => {
    const dispatch = useDispatch()
    const usersData = useSelector(state => state.usersPage.users)
    const [value, setValue] = useState(true);

    const friendsNumber = useSelector((state) => state.usersPage.friendNumber)
    const getUsersData2 = dispatch(getUsersData)

    useEffect(() => {
        /*  getUsersData2*/
        props.getUsersData()
    }, [])
    console.log(usersData)
    const usersList = usersData.map((user) => {
        const userLink = '/' + user.id
        return <div className={s.userContainer}>
            <div className="row">
                <div className="col-sm-1">
                    <NavLink to={userLink} end> <img className={s.logo}
                                                     src={user.photos.small == null ? userlogo : user.photos.small}/>
                    </NavLink>

                </div>
                <div className="col">
                    <div className={s.userInfoContainer}>
                        <div className={s.userName}>{user.name}</div>
                        {user.status ? <li> {user.status}</li> : null}
                        <span> <CiLocationOn style={{color: 'grey', size: '50px'}}/> Russia</span>
                        <span> <BsCalendar2Week style={{color: 'grey', size: '50px'}}/> 4 hours ago</span>


                    </div>
                </div>
                <div className="col text-end align-text-center">
                    {user.followed != true
                        ? <Button className={s.followBtn} variant="primary" onClick={() => {
                            props.followUser(user.id)
                        }}>Follow </Button>
                        : <Button className={s.unfollowBtn} variant="primary" onClick={() => {
                            props.unfollowUser(user.id)
                        }}>Unfollow </Button>}
                    <BiMessageSquareDetail style={{color: 'blue', size: '50px'}}/>
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
                            <div className={s.navigation}>
                                <div className={"d-flex align-items-start"}>
                                    <div className={props.friend == true ? s.friendsTogler : s.friendsToglerActive}>
                                        All Members
                                    </div>
                                    <Switch
                                        isOn={props.friend}
                                        handleToggle={() => {
                                            props.setFriend(props.friend == true ? null : true)
                                            setValue(props.friend)

                                            props.getUsersData(10, 1, '', value)
                                        }}
                                    />
                                    <div className={props.friend == true ? s.friendsToglerActive : s.friendsTogler}>
                                        My Friends <Badge pill bg="success">{friendsNumber}</Badge>
                                    </div>
                                </div>

                            </div>
                            {usersList}
                            <PaginationP totalCount={props.totalCount} getUsersData={props.getUsersData}
                                         searchName={props.searchName}
                                         page={props.page} friend={props.friend}/>

                        </div>

                    </div>

                    <div className={"col-4"}>

                        <div className={s.activeUserInfoContainer} onClick={props.onClick}>
                            <div className={s.activeUsers}>
                                <span>Active User</span>
                                                            </div>
                            <div className={s.activeUserInfo}> There are no recently active members</div>
                        </div>
                        <div className={s.activeUserInfoContainer} onClick={props.onClick}>
                            <div className={s.activeUsers}>
                                <span>Last Activities</span>
                            </div>
                            <div className={s.activeUserInfo}> <Activities/></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        {/*   <FriendsForm getUsersData={props.getUsersData} setPage={props.setPage} friend={props.friend}
                     setFriend={props.setFriend}/>
        {usersList}*/}
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
