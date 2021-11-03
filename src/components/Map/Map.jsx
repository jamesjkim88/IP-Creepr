/*

TASKS:
  - Might have to delete Leaftlet and install React LeaftLet
  - plug in long and lats dynamically from IP geolocation data

*/

import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet';
import PanTo from '../SetView/SetView';


export default function Map({inputIPDataLat, inputIPDataLong, userLat, userLong}){

  function renderMap(){
    if(userLat && userLong){
      return(
        <MapContainer center={[userLat, userLong]} zoom={25} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {inputIPDataLat && inputIPDataLong ? (
            <>
              <PanTo inputIPDataLat={inputIPDataLat} inputIPDataLong={inputIPDataLong}/>
              <Marker position={[inputIPDataLat, inputIPDataLong]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
              </>
          ) : (
            <Marker position={[userLat, userLong]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          )}
        </MapContainer>
      )
    }
  }
  console.log(userLat);
console.log(inputIPDataLat);

// useEffect(() => {
//   const map = map.toPan(inputIPDataLat, inputIPDataLong);
// })
  
  return(
    <>
      {renderMap()}
    </>
  )
}