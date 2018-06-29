module.exports = {
  model: function(name){

    var model =  {
      "id": name,
      "type":"TrafficStation",
      "lat":{
        "value": "",
        "type":"Number"
      },
      "lng":{
        "value": "",
        "type":"Number"
      },
      "accuracy":{
        "value": "",
        "type":"Number"
      },
      "flow":{
        "value":  "",
        "type":"Number"
      },
      "speed":{
        "value": "",
        "type":"Number"
      }
    };

    return model;
  }
}
