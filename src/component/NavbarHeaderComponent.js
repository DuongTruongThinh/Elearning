import React, { useState } from 'react'

export default function NavbarHeaderComponent() {
  const styleHeader = 'flex items-center justify-start duration-300 px-4 text-[#c4c5c7] fixed top-0 left-0 right-0 z-50'
  const [color, setcolor] = useState(false);
  const changleColor = () => {
    if (window.scrollY >= 90) {
      setcolor(true)
    } else {
      setcolor(false)
    }
  }

  window.addEventListener('scroll', changleColor)
  return (
    <div className={color ? `bg-[#303956] + ${styleHeader}` : `bg-transparent + ${styleHeader}`}>
      <button className='mr-4'>
        <span>
          <i class="material-icons hover:text-white duration-150">
            <a href="">short_text</a>
          </i>
        </span>
      </button>
      <a href="" className='flex items-center text-[26px] h-[5rem] mr-4'>
        <span className='mr-2 '>
          <img className='bg-[#5567ff] rounded h-[2.5rem] p-1' src="https://luma.humatheme.com/public/images/illustration/student/128/white.svg" alt="" />
        </span>
        <span className='active font-medium'>Luma</span>
      </a>
      <ul className='font-medium flex ml-2 h-[5rem] items-center w-[80%]'>
        <li className='active ml-4'>
          <a href="#">Home</a>
        </li>
        <li className='ml-4 hover:text-white duration-150'>
          <a href="#">Courses</a>
        </li>
        <li className='ml-4 hover:text-white duration-150'>
          <a href="#">Paths</a>
        </li>
        <li className='ml-4 hover:text-white duration-150'>
          <a href="#">Pricing</a>
        </li>
        <li className='ml-4 hover:text-white duration-150'>
          <a href="#">Teachers</a>
        </li>
        <li className='ml-4 hover:text-white duration-150' style={{ transform: "translateY(10%)" }}>
          <i class="material-icons">
            <a href="#">people_outline</a>
          </i>
          </li>
      </ul>
      <ul className='flex h-[5rem] items-center'>
        <li className='hover:text-white duration-150' style={{ transform: "translateY(10%)" }}>
          <i class="material-icons">
              <a href="">lock_open</a>
          </i>
          </li>
        <li className='ml-4'>
          <a href="" className='duration-150 text-white rounded px-4 py-2 font-semibold text-[12px] w-[118px] block hover:bg-white hover:text-[#5567ff]' style={{ border: "1px solid #fff" }}>
            GET STARTED
          </a>
        </li>
      </ul>
    </div>
  )
}
