import React from 'react'
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    navigate('/');
  }

  return (
    <header className="Header">
      <nav className="Navbar">
        <h2>STUDIO GHIBLI FILMS</h2>
        <div className="ButtonLogoutWrapper">
          <button 
            className="ButtonLogout"
            onClick={handleLogout}
          >
            LOGOUT
          </button>
        </div>
        
      </nav>
    </header>
  )
}

export default Header
