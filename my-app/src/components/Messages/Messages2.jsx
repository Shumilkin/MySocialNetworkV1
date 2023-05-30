import * as React from "react";
import s from './messages.module.css'
import {connect} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../../media/logo/Zeronet_logo.png";
import {Button} from "react-bootstrap";
import MessagesForm from "./MessagesForm/MessagesForm";
import {deleteMessage, getDialogsMessage} from "../../redux/messages-reduser";
import {useState} from "react";
import MessagesList from "./MessagesList";
import ProfilePost from "../Profile/Status/ProfilePosts/Post";
import ProfilePostsForm from "../Profile/Form/ProfilePostsForm";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import {FcLike} from "react-icons/fc";
import {FaRegCommentDots} from "react-icons/fa";
import DialogsItem from "./DialogItem";
import DialogItem from "./DialogItem";
import UserItem from "./UserItem";
const Messages = (props) =>{
    const [value, setValue] = useState(0);
   let  DialogsList =  <ul>
       {props.dialogsData.map(item => (
             /* <li key={item.id} onClick={()=> {setValue(item.id)}}>{item.user} </li>*/
           <UserItem  onClick={()=> {setValue(item.id)}} name={item.user}/>
       ))}

   </ul>
  /*  let  MessagesList =  <ul>
        {props.messagesData[value].messages.map(item => (
            <li key={item.id}>{item.message} </li>
        ))}
    </ul>*/
    return     <div classname={s.area} >
<div className={s.messagesBG}>
    <div className={"row p-3"}>
        <div className={"col-4"}>
            <div className={s.containerHalfLeft}>
                <div className={"d-flex"}>
                    <Form.Control  placeholder="Search ..."  type="textarea"
                                   name="name" className={"p-1"}/>
                    <Button variant="primary" type="submit">
                        Go
                    </Button>
                </div>
            </div>
            <DialogItem data={DialogsList}/>
            <div className={s.containerHalfLeft}>


            </div>

        </div>
        <div className={"col-8"}>
            <div className={s.containerHalfRight}>
                <MessagesList messagesData={props.messagesData}  deleteMessage={props.deleteMessage} value={value}/>

            </div>
            <div className={s.containerHalfRight}>
                <MessagesForm setDialogsMessage={props.getDialogsMessage} value={value}/>

            </div>
            {/*<div className={s.containerHalfRight}>
                <MessagesList messagesData={props.messagesData}  deleteMessage={props.deleteMessage} value={value}/>
            </div>*/}

        </div>

    </div>

        

</div>
    </div>
}
const mapStateToProps = (state) => {

    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData:state.messagesPage.messagesData,
        isAuth:state.authReducer.isAuth

    };
}
export default connect(mapStateToProps, {getDialogsMessage, deleteMessage}) (Messages)