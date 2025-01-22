import React, { useState, useEffect } from 'react';
import players from '../test_files/players.json';
import '../css/Profile.css';
import Alert from '../components/Alert';

function Profile() {
  const [inputName, setInputName] = useState('');
  const [playerData, setPlayerData] = useState(null);
  const [useAltImage, setUseAltImage] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const handleNameSubmit = () => {
    const foundPlayer = players.find((player) => player.nickname.toLowerCase() === inputName.toLowerCase());
    if (foundPlayer) {
      setPlayerData(foundPlayer);
      setAlertMessage('');
    } else {
      setAlertMessage(`ещё не играл в Deadly Soon :(`); 
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleNameSubmit();
    }
  };

  const handleInputChange = (e) => {
    setInputName(e.target.value);
    setAlertMessage('');
  };

  useEffect(() => {
    if (playerData) {
      const interval = setInterval(() => {
        setUseAltImage((prev) => !prev);
      }, 600);

      return () => clearInterval(interval);
    }
  }, [playerData]);

  return (
    <div className="profilePage">
      {!playerData ? (
        <div className="login_wrapper">
          <input
            type="text"
            placeholder="Введите ник"
            value={inputName}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
            className="nameInput"
          />
          <button onClick={handleNameSubmit} className="submitButton">
            Подтвердить
          </button>
          {alertMessage && <Alert boldText={inputName} text={alertMessage} />}
        </div>
      ) : (
        <div className="profile_wrapper">
          <div className="profile_card">
            <p className="profile_name">{playerData.nickname}</p>
            <img
              src={require(`../img/${playerData.class}${useAltImage ? '1' : ''}.png`)}
              className="profile_img"
              alt={playerData.class}
            />
            <p>LvL: {playerData.level}</p>
            <p>Playtime: {playerData.hoursPlayed} hours</p>

            <div className={`weapon_img ${playerData.currentWeapon.weaponRarity.toLowerCase()}`}>
              <div className={`weapon_rarity ${playerData.currentWeapon.weaponRarity.toLowerCase()}`}></div>
              <img
                src={require(`../img/${playerData.currentWeapon.weaponName}.png`)}
                alt={playerData.currentWeapon.weaponName}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
