import React, { Component } from 'react'
import loadings from './loadings.gif'

export class spinner extends Component {
  render() {
    return (
      <div className='text-center'>
       
        <img  height='50px' src={loadings} alt="loadings" />
      </div>
    )
  }
}

export default spinner
