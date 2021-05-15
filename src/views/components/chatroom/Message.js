import {React} from 'react' ;
// import '../../../styles/Message.css';
import sentPin from '../../../assets/sentPin.svg';
import receivedPin from '../../../assets/receivedPin.svg';

const styles = {

    'bannerContainer' : {
        display: 'flex',
        justifyContent: 'center',
    },

    'banner' : {
        padding: '5px 12px 6px',
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
        width: 'auto',
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

};

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
            
            <div style={styles.['messageBody'+classOfMsg]} >
                <img src={ (classOfMsg==="sent") ? sentPin : receivedPin } style={{filter: 'red'}} />

                <div className={classOfMsg} style={styles[classOfMsg]} >
                    <p className={"sender"} style={styles.senderName} >{content.sendersName}</p>
                    <div className={"contentOfMessage"} style={{width: 'fit-content', wordWrap: 'break-word'}} >
                        {content.messageBody}
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
