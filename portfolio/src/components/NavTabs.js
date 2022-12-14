import React from 'react';



function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs navbar-expand-lg">
      <li className="nav-item nav-text navlink">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
         
          className={currentPage === 'About' ? 'nav-link active test' : 'nav-link test'}
        >
          About
        </a>
      </li>
      <li className="nav-item nav-text">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}

          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item nav-text">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
         

          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      <li className="nav-item nav-text">
        <a
          href="#contact"
        

          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  )
}

export default NavTabs;