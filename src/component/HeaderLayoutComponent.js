import React from 'react'
import { NavLink } from 'react-router-dom'
import './component.css'
export default function HeaderLayoutComponent() {
    return (
        <div className='relative top-[50%] text-white z-[1]'>
            <div className=' container'>
                <h1 className='text-[4rem] font-bold mb-4' style={{ lineHeight: "1.25" }}>Learn to Code</h1>
                <p className='text-[22px] font-medium mb-14' style={{ lineHeight: "1.41", maxWidth: "700px" }}>Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
                <a href="" className='text-black mb-8 bg-[white] rounded px-6 py-4 uppercase font-medium text-[19px] hover:opacity-80 duration-300' style={{ lineHeight: "1.75", border: "1px solid transparent", letterSpacing: "1px", fontVariant: "all-small-caps" }}>
                    Browse Courses
                </a>
                <p className='text-white text-[13px] mt-6'>
                    <strong>Are you a teacher?</strong>
                </p>
            </div>
        </div>
    )
}
