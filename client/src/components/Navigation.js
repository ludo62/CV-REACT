import React from 'react';
import profil from '../media/photo.jpg';

const Navigation = () => {
    return (
        <div className="sidebar">
            <div className="id">
                <div className="idContent">
                 <img src = {profil} alt="profil cv" />
                   <h3>Fournier Ludovic</h3>
                </div>
            </div>
        </div>
    );
};

export default Navigation;