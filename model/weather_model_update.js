module.exports = {
  model: function(weather){

    var model =  {

      "lat":{
        "value": weather.station.lat,
        "type":"Number"
      },
      "lng":{
        "value": weather.station.lng,
        "type":"Number"
      },
      "temperature":{
        "value": weather.temperature,
        "type":"Number"
      },
      "relative_humidity":{
        "value":  weather.relative_humidity,
        "type":"Number"
      },
      "dewpoint":{
        "value": weather.dewpoint,
        "type":"Number"
      },
      "pressure":{
        "value": weather.pressure,
        "type":"Number"
      },
      "wind_strength":{
        "value": weather.wind_strength,
        "type":"Number"
      },
      "wind_dir":{
        "value": weather.wind_dir,
        "type":"Number"
      },
      "rain":{
        "value": weather.rain,
        "type":"Number"
      },
      "rain_rate":{
        "value": weather.rain_rate,
        "type":"Number"
      }
    };

    return model;
  }
}
