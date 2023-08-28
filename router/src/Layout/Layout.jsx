import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import Main from '../Components/Main'
import About from '../Components/About'
import useLocalStorage from '../Hooks/useLocalStorage'


function Layout() {


  return (
    <div className='container'>
        <div className="nav" id='rel'>
        <div className='logo'><h1>History</h1>
            <div className="circle">
                <h1>.Ge</h1>
            </div>
          </div>
            <div className="links">
              <Link className='link' to={'/'}>Main</Link>
              <Link className="link" to={'/about'}>About</Link>
        </div>
    </div>
    <div className="info_cont">
        <Outlet/>
    </div>
    
    </div>
  )
}

export default Layout