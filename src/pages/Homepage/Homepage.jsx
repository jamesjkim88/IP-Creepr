import React, {useState, useEffect} from 'react';
import Input from '../../components/Input/Input';
import Map from '../../components/Map/Map';
import apiService from '../../utils/apiService';


export default function Homepage(){
  const [data, setData] = useState({})

  async function getUserIPLocationData(){
    try{
      const data = await apiService.getUserIPLocationData();
      setData(data);
      console.log(data);
    }catch(err) {
      console.log(err);
      return err;
    }
  }

  useEffect(() => {
    //getIPLocationData()
  }, [])

  return(
    <>
    <Input />
    <Map />
    </>
  )
}