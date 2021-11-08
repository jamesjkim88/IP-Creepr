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

      {/* <table className="ip-data-table">
        <tr>
          <th className="th-header" id="header-1">IP ADDRESS</th>
          <th className="th-header" id="header-2">LOCATION</th>
          <th className="th-header" id="header-3">TIMEZONE</th>
          <th className="th-header" id="header-4">ISP</th>
        </tr>
        <tr>
          <td className="td-copy" id="ip-address">{Object.keys(inputIPData).length !== 0 ? inputIPData.ip_address : ''}</td>
          <td className="td-copy" id="ip-location">{locationRender()}</td>
          <td className="td-copy" id="ip-timezone">{Object.keys(inputIPData).length !== 0 ? inputIPData.timezone.name : ""}</td>
          <td className="td-copy" id="ip-isp">{Object.keys(inputIPData).length !== 0 ? inputIPData.connection.organization_name : ''}</td>
        </tr>
      </table> */}

      <div className="ip-data-table">
        <div className="row-header">
          <p className="th-header" id="header-1"><span className="white-border">IP ADDRESS</span></p>
          <p className="th-header" id="header-2"><span className="white-border">LOCATION</span></p>
          <p className="th-header" id="header-3"><span className="white-border">TIMEZONE</span></p>
          <p className="th-header" id="header-4"><span className="white-border">ISP</span></p>
        </div>
        
        <div className="row-content">
          <p className="td-copy" id="ip-address">{Object.keys(inputIPData).length !== 0 ? inputIPData.ip_address : ''}</p>
          <p className="td-copy" id="ip-location">{locationRender()}</p>
          <p className="td-copy" id="ip-timezone">{Object.keys(inputIPData).length !== 0 ? inputIPData.timezone.name : ""}</p>
          <p className="td-copy" id="ip-isp">{Object.keys(inputIPData).length !== 0 ? inputIPData.connection.organization_name : ''}</p>
        </div>
      </div>
 
    </>
  )
}