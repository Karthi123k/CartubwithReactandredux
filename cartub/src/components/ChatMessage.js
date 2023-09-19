import React from 'react';
import user from './img/user.png';
const ChatMessage = ({name, message}) => {
  return (
    <div className="flex flex-row p-2 w-full shadow-lg bg-white-500 text-black-900"> 
    <img alt="user-info" className="h-6" src={user} />
    <span className="font-bold px-2">{name}</span>
    <span className="max-w-[400px] whitespace-normal" style={{wordBreak: 'break-all'}}>{message}</span>
  </div>  

   )
};

export default ChatMessage;