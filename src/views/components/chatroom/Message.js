import {React} from 'react' ;
import darkSentPin from '../../../assets/darkSentPin.svg';
import darkReceivedPin from '../../../assets/darkReceivedPin.svg';
import lightSentPin from '../../../assets/lightSentPin.svg';
import lightReceivedPin from '../../../assets/lightReceivedPin.svg';
import parse from 'html-react-parser';

function processMessage(message) {
    // return message;
    // The function will 
    // 1. Split message acc to line breaks
    // 2. Detect for links
    // 3. Add bold(<b></b>), italic(<i></i>) and strikethrough(<s></s>) tags in between the message at respective places. By watching '*'s, '_'s and '~' respectively.

    // URLs PROCESSED
    var urlRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm;
    message = message.replace(urlRegex, url => '<a style="text-decoration: none; color: #039BE5;" href="' + url + '" target="_blank" rel="noopener noreferrer" >' + url + '</a>') ;

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
                if ( (totalBolds&1)===1 && boldCount===totalBolds-1 )
                    continue;
                processedMessagePart += ( (boldCount&1)===0 ) ? '<b>' : '</b>';
                ++boldCount;
            }
            else if ( ch==='_') {
                if ( (totalItalics&1)===1 && italicCount===totalItalics-1 )
                    continue;
                processedMessagePart += ( (italicCount&1)===0 ) ? '<i>' : '</i>';
                ++italicCount;
            }
            else if ( ch==='~') {
                if ( (totalStrikes&1)===1 && strikeCount===totalStrikes-1 )
                    continue;
                processedMessagePart += ( (strikeCount&1)===0 ) ? '<s>' : '</s>';
                ++strikeCount;
            } else {
                processedMessagePart += ch;
            }
        }
        processedMessage += processedMessagePart + ((i<=(partsOfMessage.length-2))?'<br/>':'');
    }
    
    return processedMessage;
}

function Message( {content, sender, theme} ) {

    const styles = {

        'bannerContainer' : {
            display: 'flex',
            justifyContent: 'center',
        },
    
        'banner' : {
            padding: '5px 12px 6px',
            margin: '6px',
            textAlign: 'center',
            backgroundColor: (theme==='light')?'#E1F3FB':'#1E2A30',
            borderRadius: 7.5,
            boxShadow: '0 1px 0.5px rgba(0,0,0,.15)',
            color: (theme==='light')?'#1D1E1F':'#FFF',
            fontSize: 12,
        },
        
        'messageBodyreceived' : {
            padding : '0px 52px 0px 52px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'start',
            color: (theme==='light')?'#000':'#FFF',
        },
    
        'messageBodysent' : {
            padding : '0px 52px 0px 52px',
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems: 'start',
            color: (theme==='light')?'#000':'#FFF',
        },
    
        'sent' : {
            padding: '6px 7px 1px 9px',
            marginBottom: 5,
            maxWidth: '60%',
            backgroundColor: (theme==='light')?'#DCF8C6':'#056162',
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
            backgroundColor: (theme==='light')?'#FFF':'#262D31',
            borderRadius: '0px 7.5px 7.5px 7.5px',
            boxShadow: '0 1px .5px rgba(0,0,0,.13)',
            fontSize: 14,
            width: 'fit-content',
            wordWrap: 'break-word',
        },
    
        'time' : {
            textAlign: 'right',
            fontSize: 11,
            fontWeight: '500',
            color: (theme==='light')?'#8C8C8C':'#9CBCBD',
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


    function Banner( {content} ) {
        return (
            <div className={"banner"} style={styles.bannerContainer} >
                <p className={"banner__content"} style={styles.banner} >{content}</p>
            </div>
        );
    }


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
                
                <img src={(theme==='light')? ((classOfMsg==='sent')?lightSentPin:lightReceivedPin) : ((classOfMsg==='sent')?darkSentPin:darkReceivedPin)} 
                alt={'msgpin'} />

                <div className={classOfMsg} style={styles[classOfMsg]} >
                    <p className={"sender"} style={styles.senderName} >{content.sendersName}</p>
                    <div className={"contentOfMessage"} style={{width: 'fit-content', wordWrap: 'break-word', lineHeight: '19px'}} >
                        {parse(processMessage(content.messageBody))}
                    </div>
                    
                    {  
                    (classOfMsg!=="banner")?
                    <p style={styles.time} >{content.timestamp.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</p>
                    :<></>
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
