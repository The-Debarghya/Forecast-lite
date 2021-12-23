
const menus = {
  main: `Usage:
  outside [command] <options>

  today----->show today's weather
  version--->show version of this package
  help------>show the detailed usage options`,

  today:`Usage:
  outside today <options>

  --location -l--->to search for particular location
  
  outside today
  to search for your location`,
  forecast:`Usage:
  outside forecast <options>

  --location -l--->to search for particular location
  
  outside forecast
  to search for your location`
};
module.exports = (args) => {
  const sub_cmd = args._[0] === 'help' ? args._[1] : args._[2]

  console.log(menus[sub_cmd] || menus.main)
}
