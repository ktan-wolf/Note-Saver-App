import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import {toast} from 'react-hot-toast';

const Viewpaste = () => {

    const {id} = useParams();
    const allPaste = useSelector((state) => state.paste.pastes);

    const paste = allPaste.filter((p) => p._id === id)[0];

  return (
    <div className='flex gap-5 mt-5 flex-col'>
        <div className='flex gap-3 place-content-between h-14'>
            <input className='rounded-xl pl-2 w-[300px] bg-black'
                type='text'
                placeholder='title' 
                value={paste.title}
                disabled
            />
        </div>
        <div className='mt-5 h-[525px] bg-black rounded-2xl flex flex-col items-end p-1'>
            <div  className='h-5 w-12 flex justify-center items-center  mb-2  cursor-pointer'
                onClick={() => {
                    navigator.clipboard.writeText(paste.value)
                    toast.success("copied to clipboard")
                }}>
                copy
            </div>
            <textarea className='w-[500px] h-[500px] rounded-xl pl-4'
                placeholder='enter the content'
                value={paste.value}
                disabled
            />
        </div>
    </div>
  )
}

export default Viewpaste