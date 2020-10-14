import React from 'react';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import mapMarkerImg from '../images/map-pin.svg';
import {Map, TileLayer} from 'react-leaflet';
import '../styles/pages/orphanage-map.css';
import 'leaflet/dist/leaflet.css'; /*Estilização padrão do leaftlet*/

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
            </Map>

            <Link to='' className='create-orphanage'>
                <FiPlus size={12} color='#FFF' />
            </Link>
        </div>
    );
}

export default OrphanagesMap;