
let url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${process.env.REACT_APP_IP_API_KEY}`

async function getUserIPLocationData(){
  const data = await fetch(url);
  return await data.json();
}

export default{
  getUserIPLocationData
}