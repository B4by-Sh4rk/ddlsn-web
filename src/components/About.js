import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className='aboutPage'>
      <h1>О нас</h1>
      <p>Мы делаем чтобы было круто, а не круто - не делаем
      </p>
      <br />
      <br />
      <div className='aboutTable'>
        <p>Телеграм разработчика игры</p>
        <Link to="https://t.me/javritan"><img src={require('../img/tg.png')} className='icon' /></Link>
        <p>Телеграм разработчицы сайта</p>
        <Link to="https://t.me/bbsh4rk"><img src={require('../img/tg.png')} className='icon' /></Link>
      </div>
    </div>
  );
}

export default About;
