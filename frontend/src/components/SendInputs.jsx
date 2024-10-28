import React , {useState} from 'react'
import { BsFillSendFill } from "react-icons/bs";
import axios from "axios";
import {useDispatch} from "react-redux";
const SendInputs = () => {
  const [message,setMessage]= useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = async(e) =>{
    e.preventDefault();
    try{
      const res = await axios.post(`http://localhost:8080/api/v1/message/67124c8c0e0dc267a9db8c63`);
      console.log(res);

    }catch(error){
      console.log(error);
    }

  }
  return (
    <form onSubmit = {onSubmitHandler} className='px-4 my-3 '>
        <div className="w-full relative ">
            <input
             value ={message}
             onChange={(e)=> setMessage(e.target.value)}
             type="text"
             placeholder="Type a message"
             className='border text-sm rounded-lg block w-full p-3 border-zinc-600 bg-gray-700 text-white'
            />
            <button type="submit" className='absolute flex inset-y-0 end-0 items-center pr-4 size-auto'>
                <BsFillSendFill/>
                
            </button>
           
        </div>
    </form>
  )
}

export default SendInputs