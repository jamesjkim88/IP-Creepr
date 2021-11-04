import React, {useState, useEffect} from 'react';
import Input from '../../components/Input/Input';
import LocationData from '../../components/LocationData/LocationData';
import Map from '../../components/Map/Map';
import apiService from '../../utils/apiService';


export default function Homepage(){
  const [userData, setuserData] = useState({})
  const [inputIPData, setInputIPData] = useState({});

  async function getUserIPLocationData(){
    try{
      const data = await apiService.getUserIPLocationData();
      setuserData(data);
      console.log(data);
    }catch(err) {
      console.log(err);
      return err;
    }
  }

  function getInputIPData(data){
    setInputIPData(data);
    console.log(data);
  }

  useEffect(() => {
    getUserIPLocationData()
  }, [])

  return(
    <>
    {userData ? (
      <>
      <Input getInputIPData={getInputIPData}/>
      <Map inputIPDataLat={inputIPData.latitude} inputIPDataLong={inputIPData.longitude} userLat={userData.latitude} userLong={userData.longitude}/>
      <LocationData inputIPData={inputIPData}/>
      </>
    ) : (
      <h1>Page is loading...</h1>
    )}
    </>
  )
}