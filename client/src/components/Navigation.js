import React from 'react';
import { NavLink } from 'react-router-dom';
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

            <div className="navigation">
                <ul>
                    <li>
                    <NavLink exact to="/" activeClassName="active">
                        <i className="fas fa-home"></i>
                        <span>Accueil</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/competences" activeClassName="active">
                        <i className="fas fa-mountain"></i>
                        <span>Compétences</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/portfolio" activeClassName="active">
                        <i className="fas fa-images"></i>
                        <span>Portfolio</span>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink exact to="/contact" activeClassName="active">
                        <i className="fas fa-address-book"></i>
                        <span>Contact</span>
                    </NavLink>
                    </li>
                </ul>
            </div>

            <div className="socialNetwork">
                <ul>
                    <li>
                       <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-linkedin"></i></a> 
                    </li>
                    <li>
                       <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-github"></i></a> 
                    </li>
                </ul>
                <div className="signature">
                    <p>Fournier - 2021</p>
                </div>
            </div>
        </div>
    );
};

export default Navigation;