import React, { useState, useEffect } from 'react';
import '../css/SideMenu.css';
import { Link } from 'react-router-dom';

function SideMenu({ onClose }) {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isClosing) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto'; 
        }
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [isClosing]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(onClose, 300);
    };

    return (
        <div className={`SideMenu ${isClosing ? 'closing' : ''}`}>
            <div className="side-menu-overlay" onClick={handleClose}></div>
            <div className={`side-menu-content ${isClosing ? 'closing-animation' : ''}`}>
                <div className="close-button" onClick={handleClose}>
                    ✖
                </div>
                <ul>
                    <li>
                        <Link to="/" onClick={onClose}>
                            Главная
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" onClick={onClose}>
                            О нас
                        </Link>
                    </li>
                    <li>
                        <Link to="/contacts" onClick={onClose}>
                            Контакты
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile" onClick={onClose}>
                            Профиль
                        </Link>
                    </li>
                    <li>
                        <Link to="/merch" onClick={onClose}>
                            Мерч
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideMenu;
