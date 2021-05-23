function datify( dateStr ) {
  
  // [08/06/19, 10:38:42 PM] Date Example
  let day = parseInt(dateStr.substring(1,3));
  let month = parseInt(dateStr.substring(4,6));
  let year = 2000 + parseInt(dateStr.substring(7,9));
  
  let time = dateStr.substring(11,dateStr.length-1);  
  let inc = (time[1]!==':');
  let hr = parseInt(time.substring(0,1+inc));
  let min = parseInt(time.substring(2+inc,4+inc));
  let ms = parseInt(time.substring(5+inc,7+inc));

  if ( time[time.length-2] === 'P' )
    hr += 12; 

  return new Date(year,month,day,hr,min,ms);

}

export function makeMessages( text ) {

  const regex = /\[(\d+\/\d+\/\d+)(,)(\s)(\d+:\d+:\d+)(\s)(\w+)\]/g ;
  let arr = [];
  let authors = new Set(['Select a Sender']);
  const messages = text.matchAll(regex);
  
  for ( const message of messages ) {
    arr.push(
      [ message[0], message.index, message.index+message[0].length ]
    );
  }
  arr.push(["",text.length,0]);
  let messagesArr = [];

  let day = new Date();

  for ( var i = 1 ; i<arr.length ; ++i ) {
    let message = text.substring(arr[i-1][2],arr[i][1]);
    let idx = message.indexOf(":");
    let senderValue = false;
    if ( idx!==-1 ) {
      senderValue = message.substring(1,idx);
      authors.add(senderValue);
      message = message.substring(idx+2);
    }
    
    // ADD DATE BAENNER
    let thisMessageDay = arr[i-1][0].substring(1,9);
    if ( thisMessageDay !== day ) {
      messagesArr.push({ timestamp: thisMessageDay,
        messageBody: thisMessageDay,
        sendersName: false
      });
      day = thisMessageDay;
    }

    messagesArr.push({ timestamp: datify(arr[i-1][0]), 
      messageBody: message,
      sendersName: senderValue
    });
  }

  return [Array.from(authors), messagesArr];

}
