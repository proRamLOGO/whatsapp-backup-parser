import logo from './logo.svg';
import {React, useState} from 'react' ;
import './styles/App.css';
import Navbar from './Navbar';
import Message from './Message';

function App() {

  const [content,setContent] = useState([]);

  function showFile(e) {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      const arr = text.split("\n") ;
      setContent(arr);
      console.log(arr);
    };
    reader.readAsText(e.target.files[0])
  }

  return (
    <div>
      <Navbar className="Navbar"/>
      <h1>Hello All!</h1>
      <h3>Learing React!!</h3>
      <input type={"file"} id={"fileName"} content={"Choose Backup File"} onChange={(e) => showFile(e)} />
      {
        content.map( (message) => {
          return(
            <Message content={message} />
          )
        } )

      }
      {/* {content} */}
    </div> 
  );
}

export default App;
