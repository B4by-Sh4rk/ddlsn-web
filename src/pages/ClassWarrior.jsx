import React, { useEffect } from 'react';

function ClassWarrior() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className='classCard'>
      <p className='classNaming'>Воин</p>
      <img src={require('../img/warrior.png')} className='classImg' alt='Warrior' />
      <p className='classAbout'>Призывает временные щиты блокирующие все атаки противников
      </p>
    </div>
  );
}

export default ClassWarrior;
