export function makeMessages( text ) {

  const regex = /\[(\d+\/\d+\/\d+)(,)(\s)(\d+:\d+:\d+)(\s)(\w+)\]/g ;
  let arr = []
  const messages = text.matchAll(regex);
  console.log(text[66], text[87]);
  for ( const message of messages ) {
    arr.push(
      [ message[0], message.index, message.index+message[0].length ]
    );
  }
  arr.push(["",text.length,0]);
  let messagesArr = [];

  for ( var i = 1 ; i<arr.length ; ++i ) {
    let message = text.substring(arr[i-1][2],arr[i][1]);
    let idx = message.indexOf(":");
    let senderValue = false;
    if ( idx!==-1 ) {
      senderValue = message.substring(1,idx);
      message = message.substring(idx+2);
    }

    messagesArr.push({ timestamp: arr[i-1][0], 
      startIdx: arr[i-1][1], 
      endIdx: arr[i-1][2], 
      messageBody: message,
      sendersName: senderValue
    });
  }

  // console.log(messagesArr);
  return messagesArr;

}
