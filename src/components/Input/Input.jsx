import React, {useState, useEffect} from 'react';
import apiService from '../../utils/apiService';

export default function Input(props){
  const [formDataVal, setformDataVal] = useState("");

  function handleInputChange(evt){
    evt.preventDefault();
    setformDataVal(evt.target.value);
  }

  function getInputIPData(evt){
    evt.preventDefault();
    try{
      apiService.getInputIPLocationData(formDataVal).then(data => {
        props.getInputIPData(data)
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
      <form onSubmit={getInputIPData}>
        <input type="text" onChange={handleInputChange}/>
        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  )
}