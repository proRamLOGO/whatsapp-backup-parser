import React from 'react'
import Message from '../../components/chatroom/Message';
import chatBackgroundImage from '../../../assets/bgimage.jpeg'

const styles = {
    'chatRoom': {
        backgroundImage: `url(${chatBackgroundImage})`,
        maxHeight: '90vh',
        maxWidth: '90vw',
        overflow: 'scroll',
        borderRadius: 0,
    },
}

function ChatRoom( {content, sender} ) {
    return (

        <div className="chatRoom" style={styles.chatRoom} >
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
