/*

TASKS:
  - Might have to delete Leaftlet and install React LeaftLet
  - plug in long and lats dynamically from IP geolocation data

*/

import React, {useState, useEffect} from 'react';
import hooks from '../../hooks/hooks'
import L from 'leaflet';

export default function Map(){
  
  // hooks.useScriptForMaps();



  useEffect(() => {
    L.map('map').setView([51.505, -0.09], 13);
  }, [])
  return(
    <div id="map">
      <h1>Map goes here</h1>
    </div>
  )
}