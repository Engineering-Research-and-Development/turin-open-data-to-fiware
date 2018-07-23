module.exports = {
  model: function(traffic){

  /*  var model =  {

      "lat":{
        "value": traffic.$.lat,
        "type":"Number"
      },
      "lng":{
        "value": traffic.$.lng,
        "type":"Number"
      },
      "accuracy":{
        "value": traffic.$.accuracy,
        "type":"Number"
      },
      "flow":{
        "value": traffic.speedflow[0].$.flow,
        "type":"Number"
      },
      "speed":{
        "value": traffic.speedflow[0].$.speed,
        "type":"Number"
      }
    };*/

    var model = {
      "dateObserved": new Date().toISOString(),
      "intensity": traffic.speedflow[0].$.flow,
      "averageVehicleSpeed": traffic.speedflow[0].$.speed
    }

    return model;
  }
}
