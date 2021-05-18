import {React, useState} from 'react' ;
import backgroundImg from '../../../assets/background.png';
import footerBackgroundImg from '../../../assets/bgimagedark.jpeg';
import {makeMessages} from '../../../utils/makeMessages';
import ChatRoom from '../../components/chatroom/' ;
import appIcon from '../../../assets/icon.png';
import githubIcon from '../../../assets/githubIcon.svg';
import AuthorModal from '../../components/AuthorModal';
import '../../../styles/App.css';

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
    },

    'footer' : {
        fontFamily: "'Poppins', 'sans-serif'",
        fontSize: 27,
        width: '100vw',
        height: '10vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundImage: `url(${footerBackgroundImg})`,
        color: '#FFF',
        fontWeight: 'bold',
        boxShadow: 'rgba(0, 0, 0, 0.4) 0px 1px 3px',
    },
    'footerDiv' : {
        paddingLeft: '4vw',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    'githubIcon' : {
        zIndex: 1,
        height: '6vh',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginRight: '10px',
        marginBottom: '-10px',
    },

};

function Home() {

    const [messagesCollection,setMessagesCollection] = useState([]);
    const [authorsList,setAuthorsList] = useState([]);
    const [senderName,setSenderName] = useState("");
    const [modalState,setModalState] = useState(false);

    function handleFileInput(e) {
        // Reads a file and generates messages collection.
        setSenderName('');
        e.preventDefault();
        const reader = new FileReader()
        reader.onload = async (e) => {
            const [authors, messages] = makeMessages(e.target.result);
            setAuthorsList(authors);
            setMessagesCollection(messages);
            if (authors.length>1) {
                console.log("home index");
                setModalState(true);
                window.scrollTo(0,document.body.scrollHeight);
            }
        }
        try {
            reader.readAsText(e.target.files[0]);
        } catch (err) {
            alert("No file selected!");
        }
    }

    return (
        <>

            <AuthorModal setSenderName={setSenderName} authorsList={authorsList} modalState={modalState} setModalState={setModalState} />

            {/* <nav>
                NAVBAR
            </nav>         */}
            <header style={styles.header}> 
                <div style={styles.headerContent}>
                    <img id={"icon"} src={appIcon} style={styles.icon} alt={'icon'} ></img>
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
                    <a href={'../../../utils/sampleChat.txt'} style={styles.sampleFileLink} >
                        this file.
                    </a>
                </p>

            </section>

            { (messagesCollection.length!==0) ?
            <section style={styles.appView} >
                <ChatRoom content={messagesCollection} sender={senderName} setModalState={setModalState} />
            </section> 
            : <></>
            }

            <footer style={styles.footer} >
                <div style={styles.footerDiv} >
                    Made by&nbsp;<a href='http://proramlogo.github.io/' className={'footerLink'} >Shubh Bansal</a>
                </div>
                <a href='https://github.com/proRamLOGO/whatsapp-backup-parser'><img src={githubIcon} style={styles.githubIcon} /></a>
            </footer>

        </>
    )
}

export default Home

// backgroundImage: 'url("../../../assets/background.png")'