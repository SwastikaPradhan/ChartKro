import React from 'react'

const MessageItems = ({message}) => {
    return (
        <div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
  <div className="chat-header">
   
    
  </div>
  <div className="chat-bubble">{message?.message}</div>
  <time className="text-xs opacity-50">12:45</time>
  
</div>



    )
}

export default MessageItems
//https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp