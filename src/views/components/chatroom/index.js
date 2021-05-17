import React, { useState, useEffect, useRef } from 'react'
import Message from '../../components/chatroom/Message';

import chatBackgroundImageLightTheme from '../../../assets/bgimagelight.jpeg'
import chatBackgroundImageDarkTheme from '../../../assets/bgimagedark.jpeg'
import unknownPersonIcon from '../../../assets/unknownPerson.svg'
import unknownGroupIcon from '../../../assets/unknownGroup.svg'
import lightModeIcon from '../../../assets/lightModeIcon.png'
import nightModeIcon from '../../../assets/nightModeIcon.png'
import infoIcon from '../../../assets/infoIcon.png'
// import screenShotIcon from '../../../assets/screenShotIcon.png'
import printerIcon from '../../../assets/printerIcon.svg'

function ChatRoom( {content, sender} ) {

    const messagesEndRef = useRef(null);
    const [theme, setTheme] = useState('light');

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }
  
    const toggleTheme = () => setTheme((theme==='dark')?'light':'dark');

    useEffect(() => {
      scrollToBottom()
    }, []);
  
    const styles = {
        'chatRoom': {
            backgroundImage: `url(${(theme==='light')?chatBackgroundImageLightTheme:chatBackgroundImageDarkTheme})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 400px',
            maxHeight: '80vh',
            maxWidth: '90vw',
            overflow: 'scroll',
            fontFamily: '-apple-system, BlinkMacSystemFont',
            paddingTop: 10,
        },
        'chatBar' : {
            // height: '7vh',
            height: '59px',
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            backgroundColor: (theme==='light')?'#EDEDED':'#2A2F32',
            justifyContent: 'space-between',
            color: (theme==='light')?'#000':'#FFF',
            borderBottom: (theme==='light')?'1px solid rgba(0,0,0,0.1)':'none',
            boxShadow: (theme==='light')?'none':'0px 1px 3px rgba(0,0,0,0.4)',
            zIndex: 1,
        },
        'chatIcon' : {
            height: 40,
            paddingLeft: 20,
            paddingRight: 10,
        },
        'profileGroup' : {
            // backgroundColor: 'yellow',
            width: '90%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
        },
        'h4' : {
            fontSize: 16,
            fontWeight: '500',
        },
        'utilityButtons' : {
            // backgroundColor: 'green',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '20%',
            paddingRight: 20,
        },
        'utilityButton' : {
            backgroundColor: 'transparent',
            border: 'none',
            paddingRight: 20,
        },
        'utilityButtonIcon' : {
            cursor: 'pointer',
            height: 24,
        },
    }

    return ( 
    
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            }}>
            
            <div style={styles.chatBar} >
                <div style={styles.profileGroup}>
                    <img style={styles.chatIcon} src={unknownPersonIcon} ></img>
                    <h4 style={styles.h4} >Whatsapp Group / Personal Chat</h4>
                </div>
                <div style={styles.utilityButtons} >
                    {/* <button style={styles.utilityButton}><img style={styles.utilityButtonIcon} src={"https://img.icons8.com/fluent-systems-filled/48/000000/take-screenshot.png"} /></button>
                    <button style={styles.utilityButton}><img style={styles.utilityButtonIcon} src={printerIcon} /></button> */}
                    <button style={styles.utilityButton}><img style={styles.utilityButtonIcon} src={(theme==='light')?lightModeIcon:nightModeIcon} onClick={toggleTheme}/></button>
                    <button style={styles.utilityButton}><img style={styles.utilityButtonIcon} src={infoIcon} /></button>
                </div>
            </div>

            <div className="chatRoom" style={styles.chatRoom} >
            {
                content.map( (message) => {
                return(
                    <Message content={message} sender={'Shubh Bansal'} theme={theme}/>
                )
                } )
            }
            </div>

            {/* Search in Chatroom */}
            {/* <div style={styles.searchBar} >
                <input type={"text"} style={styles.serachBarTecHolder} ></input>
            </div> */}
            <div ref={messagesEndRef}></div>
        </div>
    )
}

export default ChatRoom ;
