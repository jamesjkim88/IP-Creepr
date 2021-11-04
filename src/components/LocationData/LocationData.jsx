import React from 'react';

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

      <table className="ip-data-table">
        <tr>
          <th className="header-1">IP ADDRESS</th>
          <th className="header-2">LOCATION</th>
          <th className="header-3">TIMEZONE</th>
          <th className="header-4">ISP</th>
        </tr>
        <tr>
          <td className="td-copy" id="ip-address">{Object.keys(inputIPData).length !== 0 ? inputIPData.ip_address : ''}</td>
          <td className="td-copy" id="ip-location">{locationRender()}</td>
          <td className="td-copy" id="ip-timezone">{Object.keys(inputIPData).length !== 0 ? inputIPData.timezone.name : ""}</td>
          <td className="td-copy" id="ip-isp">{Object.keys(inputIPData).length !== 0 ? inputIPData.connection.organization_name : ''}</td>
        </tr>
      </table>
 
    </>
  )
}