import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus, FiArrowRight} from 'react-icons/fi';
import mapMarkerImg from '../images/map-pin.svg';
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';

import '../styles/pages/orphanage-map.css';
import mapIcon from '../utils/mapIcons';


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

            <Map 
                center={[-25.4669495,-49.2334783]} 
                zoom={15}
                style={{width: '100%', height: '100%'}} /* Adiciona um objeto com estilos */
            >
                <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'/>
                <Marker 
                    position={[-25.4669495,-49.2334783]}
                    icon={mapIcon}
                >
                    <Popup 
                        closeButton={false} 
                        minWidth={240} 
                        maxWidth={240} 
                        className='map-popup'
                    >
                        Teste
                        <Link to='/nlw-happy/orphanage/1'>
                            <FiArrowRight size={20} color='#FFF'/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to='/nlw-happy/orphanage/create' className='create-orphanage'>
                <FiPlus size={12} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;