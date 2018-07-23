module.exports = {
  model: function(name){

    /*var model =  {
      "id": name,
      "type":"Weather_Station",
      "lat":{
        "value": "",
        "type":"Number"
      },
      "lng":{
        "value": "",
        "type":"Number"
      },
      "temperature":{
        "value": "",
        "type":"Number"
      },
      "relative_humidity":{
        "value":  "",
        "type":"Number"
      },
      "dewpoint":{
        "value": "",
        "type":"Number"
      },
      "pressure":{
        "value": "",
        "type":"Number"
      },
      "wind_strength":{
        "value": "",
        "type":"Number"
      },
      "wind_dir":{
        "value": "",
        "type":"Number"
      },
      "rain":{
        "value": "",
        "type":"Number"
      },
      "rain_rate":{
        "value": "",
        "type":"Number"
      }
    };*/
          var model = {
                  "id": name,
                  "type": "WeatherObserved",
                  "address":
                  {
                      "addressLocality": "Torino R. Parco 250 m",
                      "addressCountry": "IT"
                  },
                  "dateObserved": new Date().toISOString(),
                  "atmosphericPressure": "",
                  "location":
                  {
                      "type": "Point",
                      "coordinates":
                      [
                          7.69,
                          45.08
                      ]
                  },
                  "precipitation": "",
                  "relativeHumidity": "",
                  "source": "https://www.torinometeo.org/api/v1/realtime/data/",
                  "stationName": "To R. Parco 250 m",
                  "temperature": "",
                  "windDirection": "",
                  "windSpeed": "",
                  "dewPoint": ""
      }


    return model;
  }
}
