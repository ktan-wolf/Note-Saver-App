import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  function defual(){
    setTitle('');
    setValue('');
    setsearchParams({});
}

  return (
    <div className='flex justify-between'>
        <NavLink onClick={defual} to='/'>
            Home
        </NavLink>
        <NavLink to='/pastes'>
            pastes
        </NavLink>
    </div>
  )
}

export default Navbar