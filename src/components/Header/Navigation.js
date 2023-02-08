import {} from '../Header/header.css'
import logo from '../../Image/Mylogo4.png'
import { useRef } from 'react'
import {NavLink} from 'react-router-dom' 

function Header({click}) {

    const navRef = useRef()
    const menuRef = useRef()
    const xRef = useRef()
    const headerRef = useRef()
    const dropDown = ()=>{
        navRef.current.classList.toggle("dropmenu")
        navRef.current.style.cssText="transform: translateY(0px);"
        xRef.current.classList.toggle("dismenu")
        menuRef.current.classList.toggle("dismenu")
        headerRef.current.classList.toggle("header-background")
    }

  return (

   <div>
        <div ref={headerRef} className='header'>
            <div className='container'>
                <div className="logo">
                    <img className='img-logo'src={logo}/>
                </div>
                <div ref={navRef} className='navbar'>
                    <NavLink to='/' onClick={dropDown}>home</NavLink>
                    <NavLink to='/portfolio' onClick={dropDown}>portfolio</NavLink>
                    <NavLink to='/service' onClick={dropDown}>services</NavLink>
                    <NavLink to='/about' onClick={dropDown}>about</NavLink>
                    <NavLink to='/contact' onClick={dropDown}>contact</NavLink>
                    <a onClick={click}>sittings</a>
                </div>
                <div>
                    <a className='menu' ref={menuRef} onClick={dropDown}><i className='bx bx-menu'></i></a>
                    <a className='menu dismenu' ref={xRef} onClick={dropDown}><i className='bx bx-x '></i></a>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Header