import * as React from "react";
import s from './messages.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MessagesForm from "./MessagesForm/MessagesForm";
import {useState} from "react";

const MessagesList = (props) =>{

    let  MessagesListData =  <ul>
        {props.messagesData[props.value].messages.map(item => (
            <div>
                <li key={item.messageId}>{item.message}
                <button onClick={()=> props.deleteMessage({value:props.value,key:item.messageId})}>- del</button></li>
            </div>
        ))}
    </ul>
    return    <div>{MessagesListData}</div>
}

export default  MessagesList