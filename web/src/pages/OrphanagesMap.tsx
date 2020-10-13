import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import mapMarkerImg from '../images/map-pin.svg';
import '../styles/pages/orphanage-map.css';

function OrphanagesMap () {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt=""/>

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Curitiba</strong>
                    <span>Paraná</span>
                </footer>
            </aside>

            <div className="">
                {/* mapa */}
            </div>

            <Link to='' className='create-orphanage'>
                <FiPlus size={12} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;