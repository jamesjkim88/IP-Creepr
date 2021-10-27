import React, {useState} from 'react';

export default function LocationData({data}){
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
          <td>{data.city && data.region_iso_code ? data.city + ", " + data.region_iso_code : data.country + " " + data.flag.emoji}</td>
          <td>{data.timezone.name}</td>
          <td>{data.connection.organization_name}</td>
        </tr>
      </table>
    </section>
    </>
  )
}