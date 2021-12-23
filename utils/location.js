const fetch = require('node-fetch');

module.exports = async () =>{
  let url1 = `https://api.ipify.org?format=json`;
  let settings = { method: "Get" };
  const response1 = await fetch(url1, settings)
  const data = await response1.json();
  const ip = data["ip"]
  let url2 = `https://ipapi.co/${ip}/latlong/`
  const response2 = await fetch(url2, settings)
  const body = await response2.text();
  const latlong = body.split(',')
  return latlong
}
