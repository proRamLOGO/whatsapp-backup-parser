import React from 'react'
import Message from './Message.js';
import './styles/ChatRoom.css';

function ChatRoom( {content, sender} ) {
    return (
        <div className="chatRoom">
        {
            content.map( (message) => {
            console.log(message);
            return(
                <Message content={message} sender={sender} />
            )
            } )
        }
        </div>
    )
}

export default ChatRoom ;
