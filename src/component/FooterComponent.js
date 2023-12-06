import React from 'react'

export default function FooterComponent() {
    return (
        <div className='container py-8 px-6 flex flex-col'>
            <p className='flex text-[26px] mb-6 text-[#272c33b3] items-center'>
                <img className='w-[30px] h-[30px] mr-2' src="https://luma.humatheme.com/public/images/logo/black-70@2x.png" alt="" />
                <span className='font-medium'>Luma</span>
            </p>
            <p className='max-w-2xl text-[13px] mb-4 text-[#272c33b3]'>
                Luma is a beautifully crafted user interface for modern Education Platforms, including Courses & Tutorials, Video Lessons, Student and Teacher Dashboard, Curriculum Management, Earnings and Reporting, ERP, HR, CMS, Tasks, Projects, eCommerce and more.
            </p>
            <p className='flex mb-2'>
                <a href="" className='mr-2 text-[#272c33b3] underline hover:no-underline '>
                    <small>Terms</small>
                </a>
                <a href="" className=' text-[#272c33b3] underline hover:no-underline '>
                    <small>Privacy policy</small>
                </a>
            </p>
            <p className='text-[#272c33b3] tex'>
                <small>Copyright 2019 © All rights reserved.</small>
            </p>
        </div>
    )
}
