import { useMap } from 'react-leaflet';

export default function ScrollWheelZoom(){
  const map = useMap();
  map.on('focus', function() { map.scrollWheelZoom.enable(); });
  map.on('blur', function() { map.scrollWheelZoom.disable(); });
};