import React, {useState} from 'react';
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
    <div className="hero">
      <h1><span id="border">IP Creepr</span></h1>
        <form onSubmit={getInputIPData}>
          <input className='ip-input' type="text" onChange={handleInputChange}/>
          <input className='btn btn-submit' type="submit" value="Submit" />
        </form>
    </div>
  )
}