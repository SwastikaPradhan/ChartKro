import React from 'react'
import OtherUser from './Otheruser';
import useGetOtherUsers from '../hooks/useGetOtherUsers';
import { useSelector } from 'react-redux';

const OtherUsers = () => {
    useGetOtherUsers();
    const {otherUsers} = useSelector(store=>store.user);
    if(!otherUsers) return;  //early return in react
  return (
    <div className='overflow-auto'>
        {otherUsers?.map((user)=>{
            return (
                <OtherUser key={user._id} user={user}/>
            )
        })}
    </div>
  )
}

export default OtherUsers