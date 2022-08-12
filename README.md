# Forecast-lite
* A command-line application to determine present weather as well as 3 days(hourly) forecasts.

## Usage:
* for present weather
```
outside today --location yourlocation
```
### OR:
* for weather forecast
```
outside forecast --location yourlocation
```
* For more help:
```
outside -h
```
* Help options:
```
Usage:
  outside [command] <options>

  today----->show today's weather
  version--->show version of this package
  help------>show the detailed usage options
```

## Build with Docker

* Build from Dockerfile:
```
docker build -t forecast-lite:latest .
docker run --rm -d --name forecast-lite:latest outside [ARGS...]
```

### OR:
* Pull the already made image from dockerhub:
```
docker run --rm -d --name heisenberg8622/forecast-lite:latest outside [ARGS...]
```
