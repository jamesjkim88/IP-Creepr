
let url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_IP_API_KEY}`

async function getUserIPLocationData(){
  const data = await fetch(url);
  return await data.json();
}

async function getInputIPLocationData(ip){
  const data = await fetch(url + "&ip_address=" + ip);
  return await data.json();
}

const helpers = {
  getUserIPLocationData,
  getInputIPLocationData
}

export default helpers;

// https://ipgeolocation.abstractapi.com/v1/?api_key=fbf4880d4899497898d39e8dd71c0951ip_address=8.8.8.8