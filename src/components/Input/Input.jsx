import React, {useState, useEffect} from 'react';
import apiService from '../../utils/apiService';

export default function Input(){
  const [inputIPDataVal, setInputIPDataVal] = useState("");
  const [inputIPData, setInputIPData] = useState("");

  function handleInputChange(evt){
    evt.preventDefault();
    setInputIPDataVal(evt.target.value);
  }

  function handleClick(evt){
    evt.preventDefault();
    console.log('clik');
    try{
      apiService.getInputIPLocationData(inputIPDataVal).then(data => {
        setInputIPData(data)
      });
    }catch(err){
      console.log(err);
      return err;
    }
  }


  return(
    <>
    <h1>IP Creepr</h1>
    <div className="hero">
      <form>
        <input type="text" onChange={handleInputChange}/>
        <button onClick={handleClick}>Submit</button>
        <h1>{inputIPData.ip_address ? inputIPData.ip_address : 'nada'}</h1>
      </form>
    </div>
    </>
  )
}