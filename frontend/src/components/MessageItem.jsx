import React from 'react'
import MessageItems from './MessageItems'
import useGetMessages from '../hooks/useGetMessages'
import { useSelector } from 'react-redux';

const MessageItem = () => {
    useGetMessages();
    const {messages}= useSelector(store=>store.message);
    if(!messages) return;
  return (
    <div className="px-4 flex-1 overflow-auto">
      {
        messages?.map((message)=>{
          return (
            <MessageItems key={message._id} messages={message}/>
          )
        })
      }
       
       


    </div>
  )
}

export default MessageItem;