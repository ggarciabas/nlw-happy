import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-pin.svg';

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [58, 68], // eixo x e Y
    iconAnchor: [29, 68], // eixo x e Y
    popupAnchor: [170, 2],
    // popupAnchor: [0, -60]
});

export default mapIcon;