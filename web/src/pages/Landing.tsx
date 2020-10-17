import React from 'react'
import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';
import logoImg from '../images/logo-text.svg';
import { Link } from 'react-router-dom'; /* permite reaproveitar o que já havia carregado! */

function Landing() {
    return (
        <div id='page-landing' >
            <div className="content-wrapper">
                <img src={logoImg} alt='happy' />
                <main>
                    <h1>Leve a felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crianças.</p>
                </main>
                <div className="location">
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </div>
                <Link to="/nlw-happy/app" className='enter-app'>
                    <FiArrowRight size={26} color='rgba(0,0,0,0.6)' />
                </Link>
            </div>
        </div>
    );
}

export default Landing;