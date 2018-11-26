import React, { Component } from 'react'


class Connection extends Component {
  render() {
    return (
      <div className='connectionBox'>
      <form className='connection'>
      <input
        placeholder='Enter your Pseudo'
        type='text'
        required />
      <button type='Submit'>Let's Go !</button>
      </form>
      </div>
    )
  }
}

export default Connection

