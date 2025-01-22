import React from 'react';
import '../css/MainText.css';
import HeaderMenu from './HeaderMenu';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="Header">
        <Link to="https://yandex.ru/games/app/248306?lang=ru" className='linkHeader'><img src={require('../img/Icon.png')} className='icon'/></Link>
        <Link to="/" className='linkHeader'> <img src={require('../img/logo2.png')} className='logo'/></Link>
        <HeaderMenu />
    </div>
  );
}

export default Header;
