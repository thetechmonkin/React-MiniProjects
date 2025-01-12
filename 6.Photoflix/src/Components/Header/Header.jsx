import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar'>
        <div className="navbar_logo">
            Photoflix
        </div>
        <div className="searchbar">
          <input type="search" placeholder='Search'/>
          <button>
          <span className="material-symbols-outlined">search</span>
          </button>
        </div>
        <div className='navbar_links'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/favorites'}>Favorites</NavLink>
        </div>
    </nav>
  )
}

export default Header