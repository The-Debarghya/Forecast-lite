const ora = require('ora')
const getWeather = require('../utils/weather')
const getLocation = require('../utils/location');
module.exports = async (args) => {
  const spinner = ora('Loading results').start()
  spinner.color = 'red';
  spinner.text = 'Fetching results';
  try {
    const location = args.location || args.l || await getLocation()
    spinner.stop()
    const weather = await getWeather(location)
    if (typeof location != 'object') {
      for (var i = 1; i < 16; i++) {
        console.log(`\t${weather["list"][i]["dt_txt"]} - Low: ${weather["list"][i]["main"]["temp_min"]}°C | High: ${weather["list"][i]["main"]["temp_max"]}°C | ${weather["list"][i]['weather'][0]["description"]}`)
      }
    } else {
      for (var i = 0; i < 8; i++) {
        var date = new Date(weather["daily"][i]["dt"] * 1000).toISOString().slice(0, 19).replace('T', ' ')
        console.log(`\t${date} - Low: ${weather["daily"][i]["temp"]["min"]}°C | High: ${weather["daily"][i]["temp"]["max"]}°C | ${weather["daily"][i]['weather'][0]["description"]}`)
      }
    }

  } catch (err) {
    spinner.stop()
    console.error(err)
  }
}
