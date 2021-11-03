import { useMap } from 'react-leaflet';

// hook to change mapview with updated coords
export default function PanTo({inputIPDataLat, inputIPDataLong}){
  const map = useMap();
  map.setView([inputIPDataLat, inputIPDataLong], 15);
  return null;
}