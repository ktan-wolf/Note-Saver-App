import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

import { toast } from 'react-hot-toast';


const initialState = {
  pastes : localStorage.getItem('pastes')
   ? JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state , action) => {
      const paste = action.payload;
      state.pastes.push(paste)
      localStorage.setItem("pastes" , JSON.stringify(state.pastes));
      toast.success("paste added successfully");
    },
    updateToPaste: (state , action) => {
      const pastes = action.payload;
      const index = state.pastes.findIndex((item) => item._id === pastes._id);

      if(index >= 0){
        state.pastes[index] = pastes;

        localStorage.setItem("pastes" , JSON.stringify(state.pastes));

        toast.success("pastes updated");
      }
    },
    resetAllPaste: (state, action) => {
        state.pastes = [];
        localStorage.removeItem("pastes");
    },
    removePaste : (state , action) => {
        const pasteId = action.payload;
        const index = state.pastes.findIndex((item) => item._id === pasteId);

        if(index >= 0){
          state.pastes.splice(index , 1);

          localStorage.setItem('pastes' , JSON.stringify(state.pastes));

          toast.success("paste deleted");
        }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, updateToPaste, resetAllPaste, removePaste } = pasteSlice.actions

export default pasteSlice.reducer