module.exports = {
  model: function(name){

    var model =  {
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
    };

    return model;
  }
}
