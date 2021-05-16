import {React} from 'react' ;
// import '../../../styles/Message.css';
import sentPin from '../../../assets/sentPin.svg';
import receivedPin from '../../../assets/receivedPin.svg';
import parse from 'html-react-parser';

const styles = {

    'bannerContainer' : {
        display: 'flex',
        justifyContent: 'center',
    },

    'banner' : {
        padding: '5px 12px 6px',
        margin: '6px',
        textAlign: 'center',
        backgroundColor: '#E1F3FB',
        borderRadius: 7.5,
        boxShadow: '0 1px 0.5px rgba(0,0,0,.15)',
        textColor: '#1D1E1F',
        fontSize: 12,
    },

    'messageBodyreceived' : {
        padding : '0px 52px 0px 52px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'start',
    },

    'messageBodysent' : {
        padding : '0px 52px 0px 52px',
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'start',
    },

    'sent' : {
        padding: '6px 7px 1px 9px',
        marginBottom: 5,
        maxWidth: '60%',
        backgroundColor: '#DCF8C6',
        borderRadius: '7.5px 0px 7.5px 7.5px',
        fontSize: 14,
        boxShadow: '0 1px .5px rgba(0,0,0,.13)',
        width: 'fit-content',
        wordWrap: 'break-word',
    },

    'received' : {
        padding: '6px 7px 0px 9px',
        marginBottom: 5,
        maxWidth: '60%',
        backgroundColor: '#FFF',
        borderRadius: '0px 7.5px 7.5px 7.5px',
        boxShadow: '0 1px .5px rgba(0,0,0,.13)',
        fontSize: 14,
        width: 'fit-content',
        wordWrap: 'break-word',
    },

    'time' : {
        textAlign: 'right',
        fontSize: 11,
        color: '#8C8C8C',
    },

    'senderName' : {
        fontSize: 12.8,
        fontWeight: 'bold',
        margin: '0px 0px 5px -2px',
        padding: '0px 0px 5px 2px',
    }, 

    'a' : {
        textDecoration: 'none',
        color: '#039BE5',
    },

};

function processMessage(message) {

    // console.log(message.split('\n'));
    // return message;
    // The function will 
    // 1. Split message acc to line breaks
    // 2. Detect for links
    // 3. Add bold(<b></b>), italic(<i></i>) and strikethrough(<s></s>) tags in between the message at respective places. By watching '*'s, '_'s and '~' respectively.

    // URLs PROCESSED
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    message = message.replace(urlRegex, url => '<a style="text-decoration: none; color: #039BE5;" href="' + url + '">' + url + '</a>') ;

    // MESSAGE SPLITTED ON BASIS OF NEW LINES/LINE BREAKS
    const partsOfMessage = message.split(/\r\n|\n|\r/);
    
    // PROCESSING BOLD, ITALIC AND STRIKETHROUGH
    let processedMessage = '';
    for ( var i = 0 ; i < partsOfMessage.length ; ++i ) { 
        
        let processedMessagePart = '';
        let totalBolds=0, totalItalics=0, totalStrikes=0;
        for ( const ch of partsOfMessage[i] ) {
            if ( ch==='*')
                ++totalBolds;
            else if ( ch==='_')
                ++totalItalics;
            else if ( ch==='~')
                ++totalStrikes;
        }

        let boldCount=0, italicCount=0, strikeCount=0;
        for ( const ch of partsOfMessage[i] ) {
            
            if ( ch==='*') {
                if ( (totalBolds&1)===1 && boldCount===totalBolds )
                    continue;
                processedMessagePart += ( (boldCount&1)===0 ) ? '<b>' : '</b>';
                ++boldCount;
            }
            else if ( ch==='_') {
                if ( (totalItalics&1)===1 && italicCount===totalItalics )
                    continue;
                processedMessagePart += ( (italicCount&1)===0 ) ? '<i>' : '</i>';
                ++italicCount;
            }
            else if ( ch==='*') {
                if ( (totalStrikes&1)===1 && strikeCount===totalStrikes )
                    continue;
                processedMessagePart += ( (strikeCount&1)===0 ) ? '<s>' : '</s>';
                ++strikeCount;
            } else {
                processedMessagePart += ch;
            }
        }
        processedMessage += processedMessagePart + ((i<=(partsOfMessage.length-2))?'<br/>':'');
    }
    console.log(processedMessage);
    return processedMessage;
}

function Banner( {content} ) {

    return (
        <div className={"banner"} style={styles.bannerContainer} >
            <p className={"banner__content"} style={styles.banner} >{content}</p>
        </div>
    );

}

function Message( {content, sender} ) {

    let classOfMsg = "banner";
    if ( content.sendersName!==false ){
        if (content.sendersName===sender ) {
            classOfMsg = "sent";
        } else {
            classOfMsg = "received";
        }
    }

    if ( classOfMsg==="banner" ) {
        return (
            <Banner content={content.messageBody} />
        )
    } else {
        return (<>
            
            <div style={styles['messageBody'+classOfMsg]} >
                <img src={ (classOfMsg==="sent") ? sentPin : receivedPin } style={{filter: 'red'}} alt={'msgpin'} />

                <div className={classOfMsg} style={styles[classOfMsg]} >
                    <p className={"sender"} style={styles.senderName} >{content.sendersName}</p>
                    <div className={"contentOfMessage"} style={{width: 'fit-content', wordWrap: 'break-word', lineHeight: '19px'}} >
                        {parse(processMessage(content.messageBody))}
                    </div>
                    
                    {  
                    (classOfMsg!=="banner")?
                    <p style={styles.time} > {content.timestamp.substring(11,21 + (content.timestamp[12]!==':') )} </p>:
                    <></>
                    }

                </div>
            </div>
        </>)
    }

    // sent,
    // received,
    // banner

}

export default Message;
