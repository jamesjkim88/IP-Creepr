import React, {useState} from 'react';

export default function LocationData({data}){

  // helper function for location rendering
  function locationRender(){
    if(!data) return; // empty return if data doesn't exist

    // render blank strings before api call is made so location is should render nada
    if(data){
      // if city and/or state is null
      if(data.city === null && data.region_iso_code === null) {
        return `${data.country} ${data.flag.emoji}`;
      }else{
        return `${data.city}, ${data.region_iso_code}`;
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
          <td>{data.ip_address ? data.ip_address : ''}</td>
          <td>{locationRender()}</td>
          <td>{data ? data.timezone.name : ""}</td>
          <td>{data ? data.connection.organization_name : ''}</td>
        </tr>
      </table>
    </section>
    </>
  )
}