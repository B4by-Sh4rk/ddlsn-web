import React from 'react';
import '../css/Alert.css';

function Alert({ boldText, text }) {
    return (
        <div className="Alert">
            <span className="closebtn" onClick={() => this.parentElement.style.display = 'none'}>&times;</span>
            <strong>{boldText}</strong> {text}
        </div>
    );
}

export default Alert;
