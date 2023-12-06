import React from 'react'

export default function BlogsComponent() {
  return (
    <div className='py-6 bg-white' style={{borderBottom:"2px solid rgb(233, 237, 242)" }}>
      <div className='container'>
        <div className='grid grid-cols-3 text-center'>
          <div className='col-span-1 flex px-2'>
            <div className='h-16 w-16 rounded-[50%] bg-[#5567ff] flex justify-center items-center mr-4'>
              <i class="material-icons text-white">subscriptions</i>
            </div>
            <div className='text-left w-[67%]'>
                <div className='pb-1 font-semibold ' style={{fontFamily:"system-ui"}}>
                  8,000+ Course
                </div>
                <p className='text-[#272c33b3] text-[13px]'>Explore a wide range of skills.</p>
            </div>
          </div>
          <div className='col-span-1 flex px-2'>
            <div className='h-16 w-16 rounded-[50%] bg-[#5567ff] flex justify-center items-center mr-4'>
              <i class="material-icons text-white">verified_user</i>
            </div>
            <div className='text-left w-[67%]'>
                <div className='pb-1 font-semibold  ' style={{fontFamily:"system-ui"}}> 
                  By Industry Experts
                </div>
                <p className='text-[#272c33b3] text-[13px]'>Professional development from the best people.</p>
            </div>
          </div>
          <div className='col-span-1 flex px-2'>
            <div className='h-16 w-16 rounded-[50%] bg-[#5567ff] flex justify-center items-center mr-4'>
              <i class="material-icons text-white">update</i>
            </div>
            <div className='text-left w-[67%]'>
                <div className='pb-1 font-semibold ' style={{fontFamily:"system-ui"}}>
                  Unlimited Access
                </div>
                <p className='text-[#272c33b3] text-[13px]'>Unlock Library and learn any topic with one subscription.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
