import React, {useState, useEffect} from 'react';
import Input from '../../components/Input/Input';
import LocationData from '../../components/LocationData/LocationData';
import Map from '../../components/Map/Map';


export default function Homepage(){
  const [userData, setuserData] = useState({})
  const [inputIPData, setInputIPData] = useState({});



  function getInputIPData(data){
    setInputIPData(data);
    console.log(data);
  }

  // useEffect(() => {
  //   getUserIPLocationData()
  // }, [])

  return(
    <>
    <Input getInputIPData={getInputIPData}/>
    <LocationData inputIPData={inputIPData}/>
    <Map inputIPDataLat={inputIPData.latitude} inputIPDataLong={inputIPData.longitude} userLat={userData.latitude} userLong={userData.longitude}/>
    </>
  )
}