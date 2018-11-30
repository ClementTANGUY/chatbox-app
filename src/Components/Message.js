import React from 'react'

const Message = ({ pseudo, message }) => {

  return (
    <div>
      <p className="user-message">
        { message }
      </p>
    </div>
  )
}


export default Message
