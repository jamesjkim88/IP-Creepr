import React, {useState} from 'react';
import Input from '../../components/Input/Input';
import LocationData from '../../components/LocationData/LocationData';
import Map from '../../components/Map/Map';
import apiService from '../../utils/apiService';


export default function Homepage(){
  const [data, setData] = useState({})
  const [inputIPData, setInputIPData] = useState({});

  function getInputIPData(data){
    setInputIPData(data);
  }

  return(
    <>
    <Input getInputIPData={getInputIPData}/>
    <LocationData inputIPData={inputIPData}/>
    <Map />
    </>
  )
}