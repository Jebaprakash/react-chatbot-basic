import { useRef,useEffect} from 'react'
import {Chatmessage} from './Chatmessage'
import './Chatmessages.css'
      
      
export  function Chatmessages({chatmessage}){
     
      const chatmessagesRef =  useRef(null);
     
      useEffect(()=>{
          const containerElem =  chatmessagesRef.current
          if(containerElem){
            containerElem .scrollTop = containerElem.scrollHeight
          }
      },[chatmessage]);
     return (
         <div className = "chat-messages-container"  ref = {chatmessagesRef }>
            
           {chatmessage.map((chatmessage)=>{
           return(
             <Chatmessage
              message = {chatmessage.message}
              sender = {chatmessage.sender}
              key = {chatmessage.id}
             />
              )
            })
           }
          </div> )
         }
      