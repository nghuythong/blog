import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './index.css'

function Navbar(props) {
  const [clickMenu, setClickMenu] = useState(false);
  const [button, setButton] = useState(true)

  const handleClickMenu = () => {
    setClickMenu(!clickMenu);
  };

  const closeMobileMenu = () => {
      setClickMenu(false)
  }

  const showButton = () => {
      if(window.innerWidth <= 960) {
          setButton(false)
      } else {
          setButton(true)
      }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton)

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            OLALA
            <i class='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClickMenu}>
            <i className={clickMenu ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={clickMenu ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Trang Chủ
              </Link>
            </li>
            <li className='nav-item'>
            <Link
                to='/blogs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Bài Viết
              </Link>
 
            </li>
            <li className='nav-item'>
            <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Dịch Vụ
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );}

Navbar.propTypes = {};

export default Navbar;
