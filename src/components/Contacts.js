import React from 'react';
import { Link } from 'react-router-dom';

function Contacts() {
  return (
    <div className='contactsPage'>
      <h1>Контакты</h1>
      <br />
      <p>Дискорд игры</p>
      <br />
      <Link to="https://discord.gg/e2H7xzUMGC"><img src={require('../img/discord.png')} className='icon'/></Link>
      <br />
      <p>Телеграм разработчика</p>
      <br />
      <Link to="https://t.me/javritan"><img src={require('../img/tg.png')} className='icon'/></Link>
      </div>
  );
}

export default Contacts;
