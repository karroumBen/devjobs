import React, { useState } from 'react'
import Button from './Button';
import { useAppContext } from '../context';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { isAuthenticated } = useAppContext();
  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const performLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    navigate('/user/login');
  }

  return (
    <header className="nav-bar">
        <div className="nav-bar__logo">
          <h1>Dev jobs</h1>
        </div>
        {
          isAuthenticated ?
          <div className="user-menu">
            <Button
                onClick={() => toggleMenu()}
                className="js-btn default"
                icon=""
                text="AB" />
            
              {
                isMenuVisible ?
                <div className="menu-content">
                  <h3>Karim</h3>
                  <ul>
                    <li onClick={() => navigate('/profile')}> Profile</li>
                    <li onClick={() => performLogout()}>Log out</li>
                  </ul>
                </div>
                :
                <></>
              }
            
          </div>
          :
          <div className="nav-bar__settings">
            <a href={`/user/login`}>
              <Button
                className="js-btn primary"
                icon="fa-solid fa-right-to-bracket"
                text="Login" />
            </a>

            <a href={`/user/register`}>
              <Button
                className="js-btn secondary"
                icon="fa-solid fa-user-plus"
                text="Register" />
            </a>
          </div>
        }
      </header>
  )
}

export default NavBar