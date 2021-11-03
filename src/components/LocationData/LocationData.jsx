import React, {useState} from 'react';

export default function LocationData({inputIPData}){
  // helper function for location rendering
  function locationRender(){
    if(Object.keys(inputIPData).length === 0) return; // empty return if data doesn't exist

    // render blank strings before api call is made so location is should render nada
    if(inputIPData){
      // if city and/or state is null
      if(inputIPData.city === null && inputIPData.region_iso_code === null) {
        return `${inputIPData.country} ${inputIPData.flag.emoji}`;
      }else{
        return `${inputIPData.city}, ${inputIPData.region_iso_code}`;
      }
    }
  }
  return(
    <>
    <section>
      <table>
        <tr>
          <th>IP ADDRESS</th>
          <th>LOCATION</th>
          <th>TIMEZONE</th>
          <th>ISP</th>
        </tr>
        <tr>
          <td>{Object.keys(inputIPData).length !== 0 ? inputIPData.ip_address : ''}</td>
          <td>{locationRender()}</td>
          <td>{Object.keys(inputIPData).length !== 0 ? inputIPData.timezone.name : ""}</td>
          <td>{Object.keys(inputIPData).length !== 0 ? inputIPData.connection.organization_name : ''}</td>
        </tr>
      </table>
    </section>
    </>
  )
}