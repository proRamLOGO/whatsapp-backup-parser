import {React, useState} from 'react' ;
import backgroundImg from '../../../assets/background.png';
import {makeMessages} from '../../../utils/makeMessages';
import ChatRoom from '../../components/chatroom/' ;
import appIcon from '../../../assets/icon.png';

const styles = {
    'header' : { 
        minHeight: '70vh', 
        backgroundImage: `url(${backgroundImg})`,
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
    },
    'headerContent' : { 
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 100,
    },
    'icon' :{
        height: 164,
    },
    'headerText' : {
        fontFamily: "'Poppins', 'sans-serif'",
        fontSize: 48,
        textAlign: 'center',
    },
    'fileUploadSection' : {
        top: 0, 
        height: '30vh',
        backgroundColor: '#EDFFEB',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontFamily: "'Roboto', 'sans-serif'",
    },
    'h4' : {
        marginTop: 20,
        top: 0,
        fontSize: 24,
        fontWeight: 'normal',
    }, 
    'uploadButton' : {
        backgroundColor: '#00565A',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        width: 230,
        height: 45,
        color: '#fff',
        cursor: 'pointer',
        fontSize: 18,
        marginTop: 20,
    },
    'uploadHelpText' : {
        fontSize: 20,
        fontFamily: "'Roboto', 'sans-serif'",
        textAlign: 'center',
    },

    'appView' : { 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
};

function Home() {

    const [messagesCollection,setMessagesCollection] = useState([]);
    const [senderName,setSenderName] = useState("");

    function handleFileInput(e) {
        // Reads a file and generates messages collection.
        e.preventDefault()
        const reader = new FileReader()
        reader.onload = async (e) => {
            let messages = makeMessages(e.target.result)
            setMessagesCollection(messages)};
        try {
            reader.readAsText(e.target.files[0]);
            window.scrollTo(0,document.body.scrollHeight);
        } catch (err) {
            let a = 1;
        }
    }

    return (
        <>
            {/* <nav>
                NAVBAR
            </nav>         */}
            <header style={styles.header}> 
                <div style={styles.headerContent}>
                    <img id={"icon"} src={appIcon} style={styles.icon} ></img>
                    <h1 style={styles.headerText} >Whatapp Backup Parser</h1>
                </div>
            </header>    

            <section id={'fileUploadSection'} style={styles.fileUploadSection} > 
                
                <h4 style={styles.h4} >Try Now</h4>
                
                <label style={styles.uploadButton} >
                    Choose File
                    <input onChange={handleFileInput} type={"file"} placeholder={""} style={{visibility: 'hidden',display: 'none'}} ></input>
                </label>
                
                <p style={styles.uploadHelpText} >
                    Upload a valid Whatsapp Chat Backup txt file or try ulpoading&nbsp;
                    <a href={'../../../utils/sampleChat.txt'} >
                        this file.
                    </a>
                </p>

            </section>

            { (messagesCollection.length!==0) ?
            <section style={styles.appView} >
                <ChatRoom content={messagesCollection} sender={senderName} />
            </section> 
            : <></>
            }

        </>
    )
}

export default Home

// backgroundImage: 'url("../../../assets/background.png")'