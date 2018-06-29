module.exports = {
  get_traffic: function(json){
    var PropertiesReader = require('properties-reader');
    var properties = PropertiesReader('./conf/config.properties');
    var turin_traffic_data_api =  properties.get('turin_traffic_data_api');

    var options = {
      uri: turin_traffic_data_api,
      method: 'GET'
    };
    return options;
  }
};
