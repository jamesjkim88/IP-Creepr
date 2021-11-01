import React, {useState} from 'react';

export default function LocationData({inputIPData}){

  // helper function for location rendering
  function locationRender(){
    if(!inputIPData) return; // empty return if data doesn't exist

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
    ip address
    <section>
      <table>
        <tr>
          <th>IP ADDRESS</th>
          <th>LOCATION</th>
          <th>TIMEZONE</th>
          <th>ISP</th>
        </tr>
        <tr>
          <td>{inputIPData.ip_address ? inputIPData.ip_address : ''}</td>
          <td>{locationRender()}</td>
          <td>{inputIPData ? inputIPData.timezone.name : ""}</td>
          <td>{inputIPData ? inputIPData.connection.organization_name : ''}</td>
        </tr>
      </table>
    </section>
    </>
  )
}