import RobotProfile from '../assets/robot.png'
import UserProfile from '../assets/user.png' 
import './Chatmessage.css'
 
export function Chatmessage({message,sender}){
          
          
          return(
            <div className = {sender === "user" ? 'chat-message-user': 'chat-message-robot '}>
              {sender ==='robot'&&  (
                <img src={RobotProfile} alt="" srcSet="" className = "chat-message-profile" />
              )}
              <div className = 'chat-message-text'>
              {message}
              </div>
              {sender=== 'user' && (
                <img src={UserProfile} alt="" srcSet=""  className = "chat-message-profile" />
              )}
            </div>
          )

        }