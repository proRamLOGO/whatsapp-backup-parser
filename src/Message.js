import {React} from 'react' ;
import './styles/Message.css';

function Banner( {content} ) {

    return (
        <div className={"banner"}>
            <p className={"banner__content"}>{content}</p>
        </div>
    );

}

function Message( {content, sender} ) {

    let classOfMsg = "banner";
    console.log(content);
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
        return (
            <>
            <div className={classOfMsg} >
                <p className={"sender"} >{content.sendersName}</p>
                <div className={"contentOfMessage"} >
                    {content.messageBody}
                </div>
                
                {  
                (classOfMsg!=="banner")?
                <p className={"time"} > {content.timestamp.substring(11,21 + (content.timestamp[12]!==':') )} </p>:
                <></>
                }
            </div>
            <div className={ (classOfMsg==="sent")?
                            "msg-pin-right-css":
                            "msg-pin-left-css"}
            ></div>
            </>
        )
    }

    // sent,
    // received,
    // banner

}

export default Message;
