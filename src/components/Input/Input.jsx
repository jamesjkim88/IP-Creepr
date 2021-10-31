import React, {useState, useEffect} from 'react';
import apiService from '../../utils/apiService';

export default function Input(){
  const [formDataVal, setformDataVal] = useState("");
  const [inputIPData, setInputIPData] = useState("");

  function handleInputChange(evt){
    evt.preventDefault();
    setformDataVal(evt.target.value);
  }

  function handleClick(evt){
    evt.preventDefault();
    try{
      apiService.getInputIPLocationData(formDataVal).then(data => {
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
        {/* <button onClick={handleClick}>Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
    </>
  )
}