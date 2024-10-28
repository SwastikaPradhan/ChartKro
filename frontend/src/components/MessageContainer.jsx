import React from 'react'
import SendInputs from './SendInputs';
import MessageItem from './MessageItem';
import { useSelector } from 'react-redux';



const MessageContainer = () => {
  const {selectedUser} = useSelector(store =>store.user);
  
  return (
    <div className = 'md:min-w-[550px] flex flex-col'>
    <div className = 'flex gap-2 items-center bg-white  text-black px-4 py-2 mb-2'>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
        
                <img src={ selectedUser?.profilePhoto} ></img>
            </div>
            
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex justify-between items-center gap-2 flex-1'>
               <p>{selectedUser?.fullName}</p>
            </div>
            
        </div>
    </div>

   
   <MessageItem/>
    <SendInputs/>
    </div>
    
    
  )
}

export default MessageContainer