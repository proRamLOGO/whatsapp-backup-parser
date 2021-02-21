import {React} from 'react' ;

function Message( {content, sender} ) {

    let classOfMsg = "banner";
    if ( content.sendersName!==false ){
        if (content.sendersName===sender ) {
            classOfMsg = "sent";
        } else {
            classOfMsg = "received";
        }
    }

    return(
        <div className={classOfMsg} >
            {/* HERE */}
        </div>
    )

    // sent,
    // received,
    // banner

}

export default Message;
