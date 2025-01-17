import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function MainText() {
  return (
    <div className="MainText">
      <div className='firts_text'>
        Добро пожаловать в захватывающий мир, где ты сможешь погрузиться в увлекательные приключения!
      </div>
      <img src={require('../img/gif.gif')} className='photo'/>
      <div className='main_text'><span>Deadly soon</span><br /> – <br />
        это уникальный рогалик <br />
        с элементами изометрического подземелья в пиксельном стиле. Ты можешь выбрать <br />одного из трех героев:
        <Link to="/ClassMage" className='gameClass'> мага</Link>, <Link to="/ClassSamurai" className='gameClass'>самурая</Link> или <Link to="/ClassWarrior" className='gameClass'>воина</Link>, каждый с уникальными способностями для сражений с монстрами!

      </div>

    </div>
  );
}

export default MainText;
