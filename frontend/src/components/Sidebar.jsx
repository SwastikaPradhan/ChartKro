import React from 'react'
import { FaSearch } from "react-icons/fa";
import OtherUsers from './OtherUsers';
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = async () =>{
    try{
      
      const res = await axios.get('http://localhost:8080/api/v1/user/logout');
      navigate("/login");
      toast.success(res.data.message);

    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="border-r border-slate-500  p-4 flex flex-col">
        <form action="" className='flex items-center gap-1'>
            <input className = 'input input-bordered rounded-md bg-white text-black' type="text" placeholder='Search....'/>
            <button type='submit' className='btn bg-zinc-200 text-black'>
            <FaSearch size="24px"/>
        </button>
        </form>
        <div className="divider"></div>
       <OtherUsers/>
       
      <div className="mt-2 ">
        <button onClick={logoutHandler} className='btn btn-sm bg-white text-black hover:white'>
            LogOut
        </button>
      </div>
    </div>
  )
}

export default Sidebar