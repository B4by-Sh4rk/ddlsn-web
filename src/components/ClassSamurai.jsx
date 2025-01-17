import React, { useEffect } from 'react';

function ClassSamurai() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className='classCard'>
      <p className='classNaming'>Самурай</p>
      <img src={require('../img/samurai.png')} className='classImg' alt='Warrior' />
      <p className='classAbout'>Самурай совершает рывок в направлении движения и получает неуязвимость во время рывка</p>
    </div>
  );
}

export default ClassSamurai;
