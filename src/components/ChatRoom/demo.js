import React, { useState, useEffect, useRef } from "react";
import socketIOClient from "socket.io-client";
import './Demo.css'
const host = "http://localhost:3000";

function Demo() {

  const [mess, setMess] = useState([]);
  const [message, setMessage] = useState('');
  const [id, setId] = useState();
  const [test,setTest] = React.useState(true)

  const socketRef = useRef();
  const messagesEnd = useRef();

  useEffect(() => {
    socketRef.current = socketIOClient.connect(host)
  
    socketRef.current.on('getId', data => {
      setId(data)
    })

    socketRef.current.on('sendDataServer', dataGot => {
      setMess(oldMsgs => [...oldMsgs, dataGot.data])
      scrollToBottom()
    })

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = () => {
    
    if(message !== null) {
      const msg = {
        content: message, 
        id: id
      }
      socketRef.current.emit('sendDataClient', msg)
      setMessage('')
      
    }
    
  }

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  }
  
//   const [test,setTest] = React.useState(true)
  
  const renderMess =  mess.map((m, index) => 
  
        <div key={index}className={`${(test) ? 'your-message' : 'other-people'} chat-item`}> 
            
          {m.content}
        </div>
        
      )
  const again = () => {
    if (test == true) {
        setTest(false)
    }
    else {
        setTest(true)
    }
  }
//m.id === id ?
  const handleChange = (e) => {
    setMessage(e.target.value)
  }

  const onEnterPress = (e) => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      sendMessage()
      
    }
  }

  return (
    <div class="box-chat">
      <div class="box-chat_message">
      {renderMess}
      <div style={{ float:"left", clear: "both" }}
             ref={messagesEnd}>
        </div>
      </div>

      <div class="send-box">
          <input className="textarea"
          
            value={message}  
            onKeyDown={onEnterPress}
            onChange={handleChange} 
      
          />
          <button onClick={{again,sendMessage}}> 
            Send
          </button>
      </div>

    </div>
  );
}

export default Demo;