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
## Build with Docker

* Build from Dockerfile:
```
docker build -t forecast-lite:latest .
docker run forecast-lite:latest
```

### OR:
* Pull the already made image from dockerhub:
```
docker pull heisenberg8622/forecast-lite:latest
docker run heisenberg8622/forecast-lite:latest
```
