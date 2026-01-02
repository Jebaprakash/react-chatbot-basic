import { useState} from 'react'
import { Chatbot } from 'supersimpledev'
import './Chatinput.css'



export function ChatInput({chatmessage, setChatmessages}){ 
    const [inputText,setInputText] = useState('');

    function saveInputText(event){
        setInputText(event.target.value)
    } 
    async function sendMesssage(){

        setInputText('');  

        const newChatmessages = [
            ...chatmessage,
            {
            message: (inputText),
                sender: "user",
                id: crypto.randomUUID(), 
            }
            ];
        setChatmessages([
            ...newChatmessages,
        {
                message: "Loading",
                sender: "robot",
                id: crypto.randomUUID(), 
        }
        
        ]);
        const response =   await  Chatbot.getResponseAsync(inputText);  
        setChatmessages([
            ...newChatmessages ,
            {
                message: (response),
                sender: "robot",
                id: crypto.randomUUID(), 
            }
            ]);
        
    }

    function sendkey(event){
        
        if(event.key =="Enter"){
        sendMesssage()
        }
    }
    function deletekey(event){
    
        if(event.key =="Escape"){
        setInputText('')
        }
    }


return (
<div className="chat-input-container">
<input 
    placeholder = "send an message to the bot" 
    size = "35"
    onChange = {saveInputText}
    onKeyDown = {sendkey}
    onKeyUp = {deletekey}
    value = {inputText }
    className = "chat-input"
/>
<button
onClick= {sendMesssage} 
className="send-button"
>send</button>
</div>
)
}
