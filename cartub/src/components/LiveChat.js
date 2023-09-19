import React ,{useEffect,useState} from 'react';
import ChatMessage from './ChatMessage';
import { useDispatch,useSelector } from 'react-redux';
import { addMeassage } from './utils/ChatSlice';
import {generateName} from'./utils/helpers';
import {generateRandomMessage} from'./utils/helpers'
const LiveChat = () => {
    const[liveMessage,setliveMessage]=useState([]);
    const dispatch=useDispatch();
    const chatMeassages=useSelector((store)=>store.chat.Messages);
    useEffect(()=>{
const i =setInterval(()=>
{
   
dispatch(addMeassage({
    name:generateName(),
    message:generateRandomMessage(),
}))
},1000);
return()=>clearInterval(i);
    },[]);
  return (
    <>
    <div className="flex flex-col-reverse w-full h-[400px] ml-2 p-2 border border-gray-400 rounded-lg overflow-y-scroll ">
<div className="font-bold">Live Chat</div>
{chatMeassages && chatMeassages.map((c, i) => (
  <ChatMessage key={i} name={c.name} message={c.message} />
))}
</div>
<form onSubmit={(e)=>{
  e.preventDefault();
  dispatch(addMeassage({
    name:generateName(),
    message:liveMessage,
    
}));
setliveMessage("");
}}>
<div>
<input className="border border-gray-900" type="text" placeholder="chat here" value={liveMessage} onChange={(e)=>setliveMessage(e.target.value)}/>
<button className="bg-green-200 font-bold">Submit</button>
</div>
</form>
</>
  )
};

export default LiveChat;