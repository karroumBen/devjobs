import React, { useState } from 'react'
import Button from './Button';
import { useAppContext, useAppContextUpdater, GUEST_USER } from '../context';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { isAuthenticated, user } = useAppContext();
  const { setIsAuthenticated, setUser } = useAppContextUpdater();

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }

  const performLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.setItem('user', JSON.stringify(GUEST_USER));
    setIsAuthenticated(false);
    setUser(GUEST_USER);
    setIsMenuVisible(false);
    navigate('/user/login');
  }

  const displayName = user.name || user.username || 'Guest';

  return (
    <header className="nav-bar">
      {isMenuVisible ? <div className="overlay" onClick={toggleMenu}></div> : null}

      <div className="nav-bar__logo">
        <h1>Dev jobs</h1>
      </div>
      {isAuthenticated ?
        <div className="user-menu">
          <Button
            onClick={toggleMenu}
            className="js-btn default"
            icon=""
            text={displayName}
          />
          {isMenuVisible ?
            <div className="menu-content">
              <h3>{displayName}</h3>
              <ul>
                <li onClick={() => navigate('/profile')}> Profile</li>
                <li onClick={performLogout}>Log out</li>
              </ul>
            </div>
            : null}
        </div>
        :
        <div className="nav-bar__settings">
          <Link to="/user/login">
            <Button
              className="js-btn primary"
              icon="fa-solid fa-right-to-bracket"
              text="Login" />
          </Link>

          <Link to="/user/register">
            <Button
              className="js-btn secondary"
              icon="fa-solid fa-user-plus"
              text="Register" />
          </Link>
        </div>
      }
    </header>
  )
}

export default NavBar
