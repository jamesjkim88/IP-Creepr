import {useEffect} from 'react';
import { useMap } from 'react-leaflet';



// hook to change mapview with updated coords
function ReCenter(inputIPDataLat, inputIPDataLong){
  const map = useMap();
  map.setView([inputIPDataLat, inputIPDataLong], 15);
  return null;
}

function ScrollWheelZoom(){
  const map = useMap();
  map.once('focus', () => {
    map.scrollWheelZoom.enable();
  });
};

export default {
  ReCenter,
  ScrollWheelZoom
}