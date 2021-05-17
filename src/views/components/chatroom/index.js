import React, { useState, useEffect, useRef } from 'react'
import html2canvas from 'html2canvas';

import Message from '../../components/chatroom/Message';
import '../../../styles/App.css';
import {requestFullScreen} from '../../../utils/requestFullScreen.js';
import {saveAs} from '../../../utils/saveAs';

import chatBackgroundImageLightTheme from '../../../assets/bgimagelight.jpeg';
import chatBackgroundImageDarkTheme from '../../../assets/bgimagedark.jpeg';
import unknownPersonIcon from '../../../assets/unknownPerson.svg';
import unknownGroupIcon from '../../../assets/unknownGroup.svg';
import lightModeIcon from '../../../assets/lightModeIcon.svg';
import darkModeIcon from '../../../assets/darkModeIcon.svg';
import infoIcon from '../../../assets/infoIcon.svg';
import screenShotIcon from '../../../assets/screenShotIcon.svg'
import enableFullScreenIcon from '../../../assets/enableFullScreenIcon.svg';
import disableFullScreenIcon from '../../../assets/disableFullScreenIcon.svg';

function ChatRoom( {content, sender} ) {

    const messagesEndRef = useRef(null);
    const [theme, setTheme] = useState('light');
    const [fullScreen, setFullScreen] = useState('disabled');

    const scrollToBottom = () => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  
    const toggleTheme = () => setTheme((theme==='dark')?'light':'dark');
    const toggleFullScreen = () => {
        setFullScreen((fullScreen==='disabled')?'enabled':'disabled');
        requestFullScreen(fullScreen);
    };

    const takeScreenShot = () => {
        var data = document.getElementById('chatRoom')
        html2canvas(data, {scrollY: -(-50+document.getElementById('chatHeader').offsetTop) }).then((canvas)=>{
          var image = canvas.toDataURL('image/png', 1.0);
          saveAs(image, "ss")
        })
    }

    useEffect(() => {
      scrollToBottom()
    }, [fullScreen]);
  
    const styles = {
        'chatRoom': {
            backgroundImage: `url(${(theme==='light')?chatBackgroundImageLightTheme:chatBackgroundImageDarkTheme})`,
            backgroundRepeat: 'repeat',
            backgroundSize: '200px 400px',
            height: (fullScreen==='enabled')?'92vh':'80vh',
            width: (fullScreen==='enabled')?'100vw':'90vw',
            // maxWidth: '90vw',
            overflow: 'scroll',
            fontFamily: '-apple-system, BlinkMacSystemFont',
            paddingTop: 10,
            display: 'block',
        },
        'chatBar' : {
            height: '7vh',
            display: 'flex',
            flexDirection: 'row',
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
            paddingRight: 10,
        },
        'utilityButton' : {
            backgroundColor: 'transparent',
            border: 'none',
            marginRight: 10,
            height: 50,
            width: 50,
            borderRadius: 50,
        },
        'utilityButtonIcon' : {
            cursor: 'pointer',
            height: 24,
        },
    }

    return ( 
    
        <div id={'chatRoom'} className={(fullScreen==='enabled')?'fullscreen':''}
            style={{
                display: 'flex',
                flexDirection: 'column',
            }}
            >
            
            <div style={styles.chatBar} id={'chatHeader'} >
                <div style={styles.profileGroup}>
                    <img style={styles.chatIcon} src={unknownPersonIcon} alt={'Chat Icon'} ></img>
                    <h4 style={styles.h4} >Whatsapp Group / Personal Chat</h4>
                </div>
                <div style={styles.utilityButtons} >
                    <button style={styles.utilityButton} className={"ripple"} ><img style={styles.utilityButtonIcon} src={screenShotIcon} onClick={takeScreenShot}  alt={'ScreenShot Button'}/></button>
                    <button style={styles.utilityButton} className={"ripple"} ><img style={styles.utilityButtonIcon} src={(fullScreen==='disabled')?enableFullScreenIcon:disableFullScreenIcon} onClick={toggleFullScreen}  alt={'FullScreen Button'}/></button>
                    <button style={styles.utilityButton} className={"ripple"} ><img style={styles.utilityButtonIcon} src={(theme==='light')?lightModeIcon:darkModeIcon} onClick={toggleTheme}  alt={'Toggle Theme Button'}/></button>
                    <button style={styles.utilityButton} className={"ripple"} ><img style={styles.utilityButtonIcon} src={infoIcon}  alt={'Info Button'}/></button>
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
