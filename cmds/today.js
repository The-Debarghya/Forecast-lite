const ora = require('ora');
const getWeather = require('../utils/weather');
const getLocation = require('../utils/location');
module.exports = async (args) => {

  const spinner = ora('Loading results').start()
  resolve => setTimeout(resolve, 1000)
  spinner.color = 'red';
  spinner.text = 'Fetching results';
  try{
    const location = args.location || args.l || await getLocation()
    spinner.stop()
    const weather = await getWeather(location)
    if (typeof location === 'object') {
      console.log(`\n\tAvg:${weather["current"]["temp"]}°C, Feels Like:${weather["current"]["feels_like"]}°C, Description:${weather["current"]['weather'][0]["description"]} `)
      console.log(`\tCloudiness: ${weather["current"]["clouds"]}%, Wind Speed: ${weather["current"]["wind_speed"]} m/s\n`)
    } else {
      console.log(`\n\tAvg:${weather["list"][0]["main"]["temp"]}°C, High:${weather["list"][0]["main"]["temp_max"]}°C, Low:${weather["list"][0]["main"]["temp_min"]}°C, Description:${weather["list"][1]['weather'][0]["description"]} `)
      console.log(`\tCloudiness: ${weather["list"][0]['clouds']['all']}%, Wind Speed: ${weather["list"][0]['wind']['speed']} m/s\n`)
    }
  }catch(err){
    spinner.stop()
    console.error(err)

  }
}
