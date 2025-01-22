import React, { useState } from 'react';
import '../css/Header.css';
import SideMenu from './SideMenu';

function HeaderMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="HeaderMenu">
      <div className="menu" onClick={toggleMenu}>
      |
      </div>
      {isMenuOpen && <SideMenu onClose={toggleMenu} />}
    </div>
  );
}

export default HeaderMenu;
