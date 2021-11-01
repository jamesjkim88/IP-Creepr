import React, {useState, useEffect} from 'react';
import Input from '../../components/Input/Input';
import LocationData from '../../components/LocationData/LocationData';
import Map from '../../components/Map/Map';
import apiService from '../../utils/apiService';


export default function Homepage(){
  const [defaultUserData, setDefaultUserData] = useState({})
  const [inputIPData, setInputIPData] = useState({});

  async function getUserIPLocationData(){
    try{
      const data = await apiService.getUserIPLocationData();
      setDefaultUserData(data);
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
    //getIPLocationData()
  }, [])

  return(
    <>
    <Input getInputIPData={getInputIPData}/>
    <LocationData inputIPData={inputIPData}/>
    <Map lat={inputIPData.latitude} long={inputIPData.longitude}/>
    </>
  )
}