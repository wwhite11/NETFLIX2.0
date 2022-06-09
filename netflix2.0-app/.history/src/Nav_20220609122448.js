import React from 'react'
import './Nav.css'

function Nav () {
  return (
    <div className='nav'>
        <div className="nav__contents">
        <img 
        className='nav_logo'
        src='https://i.pcmag.com/imagery/reviews/05cItXL96l4LE9n02WfDR0h-5..v1582751026.png' 
        alt=''
         />

         <img 
         className='nav_avatar'
         src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
         alt='' 
         />
        </div>
    </div>
  )
}

export default Nav