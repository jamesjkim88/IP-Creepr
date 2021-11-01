/*

TASKS:
  - Might have to delete Leaftlet and install React LeaftLet
  - plug in long and lats dynamically from IP geolocation data

*/

import React, {useState, useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import apiService from '../../utils/apiService';

export default function Map(){
  const [userLat, setUserLat] = useState();
  const [userLong, setUserLong] = useState();

  const cords = [51.505, -0.09];

  async function getUserIPLocationData(){
    try{
      const data = await apiService.getUserIPLocationData();
      setUserLat(data.latitude);
      setUserLong(data.longitude);
    }catch(err) {
      console.log(err);
      return err;
    }
  }

  function renderMap(){
    if(userLat && userLong){
      return(
        <MapContainer center={[userLat, userLong]} zoom={25} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[userLat, userLong]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
      )
    }else{
      return(
        <div><h1>Map is loading...</h1></div>
      )
    }
  }

  useEffect(() => {
    getUserIPLocationData()
  }, [])
  
  return(
    <>
    {/* <MapContainer center={cords} zoom={25} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={cords}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer> */}
    {renderMap()}
    </>
  )
}