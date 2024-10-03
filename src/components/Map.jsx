/* eslint-disable react/prop-types */
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = (props) => {
  return (
    <div className="mapa">
    <MapContainer center={[props.x, props.y]} zoom={16} style={{ height: '350px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[props.x, props.y]}>
        <Popup>Pérgolas Canor</Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default Map;

