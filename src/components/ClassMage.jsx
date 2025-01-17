import React, { useEffect } from 'react';

function ClassMage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className='classCard'>
      <p className='classNaming'>Маг</p>
      <img src={require('../img/mage.png')} className='classImg' alt='Warrior' />
      <p className='classAbout'>Маг призывает к своей мане, создавая взрыв вокргуг себя из множества снарядов, а так же ненадолго увеличивает скорость передвижения      </p>
    </div>
  );
}

export default ClassMage;