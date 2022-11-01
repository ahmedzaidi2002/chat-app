import React from 'react'

const navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Chat-in</span>
      <div className="user">
        <img src="https://static.toiimg.com/photo/msid-80897175/80897175.jpg" alt="" />
        <span>User</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default navbar