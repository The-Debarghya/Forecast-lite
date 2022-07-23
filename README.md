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
docker exec -d forecast-lite:latest sh -c "outside [ARGS...]"
```

### OR:
* Pull the already made image from dockerhub:
```
docker pull heisenberg8622/forecast-lite:latest
docker exec -d heisenberg8622/forecast-lite:latest sh -c "outside [ARGS...]"
```
