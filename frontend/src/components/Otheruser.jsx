import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {setSelectUser } from '../redux/userSlice.js';

export const Otheruser = ({user}) => {
    const dispatch =useDispatch();
    const {selectedUser}=  useSelector(store=>store.user);
    const selectedUserHandler = (user) =>{
        dispatch(setSelectUser (user));

    }
    
  return (
    <div>
    <div onClick={() => selectedUserHandler(user)} className = {` ${selectedUser?._id === user?._id ? 'bg-slate-700 ' : " " }flex gap-2 items-center bg-slate-400 hover:bg-slate-700 rounded-md p-2 cursor-pointer text-black`}>
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={user?.profilePhoto} alt="user-profile"/>
            </div>
            
        </div>

        <div className='flex flex-col flex-1'>
            <div className='flex justify-between items-center gap-2 flex-1'>
               <p>{user?.fullName}</p>
            </div>
            
        </div>
    </div>
    <div className='divider my-0 py-0 h-1'></div>
</div>
  )
}
export default Otheruser;
