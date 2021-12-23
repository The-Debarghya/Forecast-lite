
const fetch = require('node-fetch');
module.exports = async (location) =>{

  let settings = { method: "Get" };
  if (typeof location == 'object') {
    let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&exclude=minutely,hourly&units=metric&APPID=apikey`;
    const response = await fetch(url, settings)
    const data = await response.json();
    console.log(`\nCurrent conditions in ${data['timezone']} is:`)
    return data
  } else {
    let url = `http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&APPID=apikey`;
    const response = await fetch(url, settings)
    const data = await response.json();
    console.log(`\nCurrent conditions in ${location} is:`)
    return data
  }
}
