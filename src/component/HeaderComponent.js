import React from 'react'
import "./component.css"
import NavbarHeaderComponet from './NavbarHeaderComponent'
import HeaderLayoutComponent from './HeaderLayoutComponent'
export default function HeaderComponent() {
  return (
    <div className='header w-full h-screen mt-[-231.013px] relative' style={{backgroundImage:"url('https://luma.humatheme.com/public/images/photodune-4161018-group-of-students-m.jpg')",backgroundPosition:"50%",backgroundSize:"cover"}}>
        <NavbarHeaderComponet/>
        <HeaderLayoutComponent/>
    </div>
  )
}
