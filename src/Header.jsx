import React, { useState } from 'react';
import PFP from './assets/PFP.jpg';

function Header() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    document.body.classList.toggle('sidebar-open', !isSidebarOpen);
  };

  return (
    <>
      <div className={`header-container ${isSidebarOpen ? 'open' : ''}`}>
        <button className="burger-menu" onClick={toggleSidebar}>
          ☰
        </button>
        <header className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
          <div className="pfp-picture-div">
            <img className="PFP" src={PFP} alt="Profile Picture" />
            <h2>Georgios Kleitou</h2>
            <h3>Software Engineer</h3>
          </div>
          <nav className="navbar">
            <ul>
              <li><a href="#">Top</a></li>
              <li><a href="#Bio">Bio</a></li>
              <li><a href="#Projects">Projects</a></li>
              <li><a href="#Contact">Contact Information</a></li>
            </ul>
          </nav>
          <hr />
        </header>
      </div>
      {/* Other content goes here */}
    </>
  );
}

export default Header;
