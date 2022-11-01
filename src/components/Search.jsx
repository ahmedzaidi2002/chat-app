import React from 'react'

const search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='find a user' />
      </div>
      <div className="userChat">
        <img src="https://static.toiimg.com/photo/msid-80897175/80897175.jpg" alt="" />
        <div className="userChatInfo">
          <span>User</span>
        </div>
      </div>
    </div>
  )
}

export default search