import { useMap } from 'react-leaflet';

export default function PanTo({inputIPDataLat, inputIPDataLong}){
  const map = useMap();
  map.setView([inputIPDataLat, inputIPDataLong], 10);
  return null;
}