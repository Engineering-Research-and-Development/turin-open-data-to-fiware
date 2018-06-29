module.exports = {
  get_weather: function(json){
    var PropertiesReader = require('properties-reader');
    var properties = PropertiesReader('./conf/config.properties');
    var turin_weather_data_api =  properties.get('turin_weather_data_api');

    var options = {
      uri: turin_weather_data_api,
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    };
    return options;
  }
};
