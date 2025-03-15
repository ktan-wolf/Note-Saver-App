import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPaste, updateToPaste } from '../redux/pasteSlice';

const Home = () => {

    const [title ,setTitle] = useState('');
    const [value , setValue] = useState('');
    const [searchParams , setsearchParams] = useSearchParams()
    const pasteId = searchParams.get('pasteId');
    const dispatch = useDispatch();
    const allPaste = useSelector((state) => state.paste.pastes)

    useEffect(() => {
      if(pasteId){
        const paste = allPaste.find((p) => p._id === pasteId)
        setTitle(paste.title);
        setValue(paste.value);
      }
    }, [pasteId])
    

    function createPaste(){
        const paste = {
            title : title,
            value : value,
            _id: pasteId || Date.now().toString(36) , 
            createdAt : new Date().toLocaleString(),
        }

        if(pasteId){
            //update
            dispatch(updateToPaste(paste));

        }
        else{
            //create
            dispatch(addToPaste(paste))
        }

        //after creation or updation
        setTitle('');
        setValue('');
        setsearchParams({});
    }

  return (
    <div className='flex gap-5 mt-5 flex-col'>
        <div className='flex gap-3 place-content-between h-14'>
            <input className='rounded-xl pl-2 w-[300px]'
                type='text'
                placeholder='title' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <button onClick={createPaste} className='rounded-xl pl-4'>
                { pasteId ? 'update paste' : 'create paste'}
            </button>
        </div>
        <div>
            <textarea className='w-[500px] h-[500px] rounded-xl pl-4'
                placeholder='enter the content'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    </div>
  )
}

export default Home