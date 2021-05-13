import {React, useState} from 'react' ;
import './styles/App.css';
import {makeMessages} from './utils/makeMessages';
import ChatRoom from './ChatRoom.js' ;

function App() {

  const [messagesCollection,setMessagesCollection] = useState([]);
  const [fileText,setFileText] = useState("");
  const [senderName,setSenderName] = useState("");

  function handleFileInput(e) {
    // Reads a file and sets the value of fileText state to it's contents.
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => setMessagesCollection(makeMessages(e.target.result));
    reader.readAsText(e.target.files[0])
  }

  function openAndGetFileText(e) {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      const arr = makeMessages(text);
      setMessagesCollection(arr);
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <>
      
      <h1>Whatsapp Backup Parser</h1>

      <input type={"file"} id={"fileName"} placeholder={"Choose Backup File"} onChange={handleFileInput} />
      
      <input placeholder={"Sender's Name"} onChange={ (e) => setSenderName(e.target.value) } /> 
      
      <ChatRoom content={messagesCollection} sender={senderName} />

    </> 
  );
}

export default App;
