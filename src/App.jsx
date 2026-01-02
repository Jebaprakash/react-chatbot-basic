import { useState} from 'react'
import {ChatInput} from './components/ChatInput'
import {Chatmessages} from './components/Chatmessages'

import './App.css'

 
       

       


        function App(){
          const [chatmessage, setChatmessages] = useState([
         //                 {
         //      message: "Hello Chatbot" ,
         //      sender : "user",
         //      id : "id1"
         //    },
         //    {
         //      message: "Hello! How can I help you?" ,
         //      sender : "robot",
         //      id : "id2"
         //    },
         //    {
         //      message: "can i get today date" ,
         //      sender : "user",
         //      id : "id3 "
         //    },
         //    {
         //      message: "Today is November 23" ,
         //      sender : "robot",
         //      id : "id4"
         //    },
             ]);
            // const [chatmessages, setChatmessages] = array;
           //  const chatmessages = array[0];
           //  const setChatmessages = array[1];


          return(
             <div className="app-container">
            
               
                
               <Chatmessages
                chatmessage = {chatmessage}
                setChatmessages = {setChatmessages}
                />
                  <ChatInput 
                chatmessage = {chatmessage}
                setChatmessages = {setChatmessages}/>
            </div>
          );
        }
  
    
export default App
