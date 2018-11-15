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

var date = new Date(); // Or the date you'd like converted.
var isoDate = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString();
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
        "dateObserved": isoDate,
        "intensity": "",
        "averageVehicleSpeed": ""
        } ;

        return model;
      }
    }
