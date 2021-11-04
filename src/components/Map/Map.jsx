import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import SetView from '../../hooks/SetView/SetView';


export default function Map({inputIPDataLat, inputIPDataLong, userLat, userLong}){

  // loading map if userLat and userLong exists along with inputIPData's lat and long
  function renderMap(){
    if(userLat && userLong){
      return(
        <MapContainer center={[userLat, userLong]} zoom={15} scrollWheelZoom={false}>
          {/* {hooks.ScrollWheelZoom()} */}
          {/* <ScrollWheelZoom /> */}
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {inputIPDataLat && inputIPDataLong ? (
            <>
              {/* {hooks.ReCenter(inputIPDataLat, inputIPDataLong)} */}
              <SetView inputIPDataLat={inputIPDataLat} inputIPDataLong={inputIPDataLong}/>
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
  return(
    <>
      {renderMap()}
    </>
  )
}