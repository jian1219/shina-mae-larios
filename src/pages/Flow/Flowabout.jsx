import React from 'react'

import Header from '../components/Header'
import FlowFooter from '../components/FlowFooter'

function Flowabout() {
  return (
    <div className='flow-2'>
        <div className='flow-header-top'>
            <Header />
        </div>
        <div className='flow-scroll'>
            <div className='text-center mt-[100px]'>   
                <h1>ABOUT</h1>
            </div>
          
        </div>
        <div className='flow-footer-bot'>
            <FlowFooter />
        </div>
      
    </div>
  )
}

export default Flowabout
