import React from 'react'

import Header from '../components/Header'
import FlowFooter from '../components/FlowFooter'

function Creator() {
  return (
    <div className='flow-2'>
         <div className='flow-header-top'>
            <Header />
        </div>
        <div className='flow-scroll'>
            <div className='text-center mt-[200px] '>
                <h1 className='text-[100px]'>SOON</h1>
            </div>
            
        </div>
        <div className='flow-footer-bot'>
            <FlowFooter />
        </div>
      
    </div>
  )
}

export default Creator
