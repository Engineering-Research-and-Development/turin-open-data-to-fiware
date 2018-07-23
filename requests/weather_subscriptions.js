module.exports = {
  subscriptions: function(json){
    var PropertiesReader = require('properties-reader');
    var properties = PropertiesReader('./conf/config.properties');
    var fiware_service = properties.get('fiware-service');
    var fiware_service_path = properties.get('fiware-service-path');
    var cb_host = properties.get('context-broker-host');
    var cb_port = properties.get('context-broker-port');
    var ql_port = properties.get('quantum-leap-port');



    var options = {
      uri: 'http://'+cb_host+':'+cb_port+'/v2/subscriptions',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Fiware-Service': fiware_service,
        'Fiware-ServicePath': fiware_service_path
      },
      json: {
        "description": "Weather station",
        "subject": {
          "entities": [
            {
              "idPattern": ".*",
              "type": "WeatherObserved"
            }
          ],
          "condition": {
            "attrs": [
              "atmosphericPressure",
              "precipitation",
              "relativeHumidity",
              "temperature",
              "windDirection",
              "windSpeed",
              "dateObserved",
              "dewPoint"
            ]
          }
        },
        "notification": {
          "http": {
            "url": 'http://'+cb_host+':'+ql_port+'/v2/notify'
          },
          "attrs": [
            "atmosphericPressure",
            "precipitation",
            "relativeHumidity",
            "temperature",
            "windDirection",
            "windSpeed",
            "dateObserved",
            "dewPoint"
          ],
          "metadata": ["dateCreated", "dateModified"]
        },
        "throttling": 5
      }
    };
    return options;
  }
};
