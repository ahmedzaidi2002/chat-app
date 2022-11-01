import React from 'react'
import Img from "../img/img.png"
import Attach from "../img/attach.png"

const input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display: "none"}} id = "file" />
        <label htmlFor="file">
          <img src={Img} alt="" />
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default input