import React, {useState} from 'react';

export default function LocationData(){
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
          <td>8.8.8.8</td>
          <td>Mountain View, CA <code>zipCode</code></td>
          <td><code>timezone</code></td>
          <td>Comcast</td>
        </tr>
      </table>
    </section>
    </>
  )
}