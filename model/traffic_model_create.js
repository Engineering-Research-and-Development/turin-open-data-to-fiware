module.exports = {
  model: function(name){

    /*var model =  {
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
};*/
var model =  {
        "id": name,
        "type": "TrafficFlowObserved",
        "laneId": 1,
        "address": {
          "streetAddress": "Corso Regina Margherita",
          "addressLocality": "Torino",
          "addressCountry": "IT"
        },
        "location": {
          "type": "LineString",
          "coordinates": [
            [
              7.66692, 45.08220
            ]
          ]
        },
        "dateObserved": new Date().toISOString(),
        "intensity": "",
        "averageVehicleSpeed": ""
        } ;

        return model;
      }
    }
