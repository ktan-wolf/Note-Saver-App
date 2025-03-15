import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removePaste } from '../redux/pasteSlice';
import {toast} from 'react-hot-toast';


const pastes = () => {
    const [pasteCopy , setPasteCopy] = useState('')

    const pastes = useSelector((state) => state.paste.pastes);

    const [searchTerm , setSearchTerm] = useState('');

    const dispatch = useDispatch();

    const filterData = pastes.filter(
        (paste) => paste.title.toLowerCase()
        .includes(searchTerm.toLowerCase()) 
    );

    function handleDelete(pasteId){
        dispatch(removePaste(pasteId));
    }

  return (
    <div>
        <input 
            className='p-2 rounded-2xl min-w-[600px] mt-5'
            type='search'
            placeholder='search here'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className='flex flex-col gap-5 mt-5'>
            {
                filterData.length > 0 && 
                filterData.map(
                    (paste) => {
                        return (
                            <div className='border rounded-2xl' key={paste?._id}>
                                <div>
                                    {paste.title}
                                </div>
                                <div>
                                    {paste.value}
                                </div>
                                <div className='flex flex-row gap-4 place-content-evenly mt-5'>
                                    <button >
                                        <a  href={`/?pasteId=${paste?._id}`}>
                                            edit
                                        </a>
                                    </button>
                                    <button>
                                        <a href={`/pastes/${paste?._id}`}>
                                            view
                                        </a>
                                    </button>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste.value)
                                        toast.success("copied to clipboard")
                                    }}>
                                        copy
                                    </button>
                                    <button onClick={() => handleDelete(paste?._id)}>
                                        delete
                                    </button>
                                    <div>
                                        <button onClick={() => {
                                            // pasteCopy = {}
                                            navigator.clipboard.write(`http://localhost:5173/pastes/${paste?._id}`)
                                            toast.success("url copied to clipboard")
                                        }}>
                                            share
                                        </button>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    {paste.createdAt}
                                </div>
                            </div>
                        )
                    }
                )
            }
        </div>
        
    </div>
  )
}

export default pastes