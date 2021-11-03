/*

TASKS:
  - Might have to delete Leaftlet and install React LeaftLet
  - plug in long and lats dynamically from IP geolocation data

*/

import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map({inputIPDataLat, inputIPDataLong, userLat, userLong}){
  const [userCords, setUserCords] = useState([51.505, -0.09]);

  const position = [51.505, -0.09];

  // function setLatNLong(){
  //   if(inputIPDataLat && inputIPDataLong){
  //     render <MapContainer center={} zoom={25} scrollWheelZoom={false}>
  //   }else{
  //     render <MapContainer center={position} zoom={25} scrollWheelZoom={false}>
  //   }
  // }

  function renderMap(){
    if(userLat && userLong){
      return(
        <MapContainer center={[userLat, userLong]} zoom={25} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {inputIPDataLat && inputIPDataLong ? (
            <Marker position={[inputIPDataLat, inputIPDataLong]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
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
  
  return(
    <>
      {renderMap()}
    </>
  )
}