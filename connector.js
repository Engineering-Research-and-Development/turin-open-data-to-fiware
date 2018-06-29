var request = require('request');
var weather_Model_create = require('./model/weather_model_create');
var weather_Model_update = require('./model/weather_model_update');
var traffic_Model_create = require('./model/traffic_model_create');
var traffic_Model_update = require('./model/traffic_model_update');
var create_entity = require('./requests/create_entity');
var update_entity = require('./requests/update_entity');
var get_weather = require('./requests/get_weather');
var get_traffic = require('./requests/get_traffic');
var weather_subscriptions = require('./requests/weather_subscriptions');
var traffic_subscriptions = require('./requests/traffic_subscriptions');
var xml2js  = require('xml2js');
var optionsWeather = get_weather.get_weather();
var optionsTraffic = get_traffic.get_traffic();
var options_weather_Subscriptions = weather_subscriptions.subscriptions();
var options_traffic_Subscriptions = traffic_subscriptions.subscriptions();
var PropertiesReader = require('properties-reader');
var properties = PropertiesReader('./conf/config.properties');
var subscriptions = properties.get('subscriptions');
var update_interval = properties.get('update-interval');
var count = 0;
var count2 = 0;


function callbackCreate(error, response, body) {
  if (!error) {
    if(response.body!=null){
      console.log("Entity " + response.body.description);
    }
    else{
      console.log("Entity created");
    }
  }
  else {
    console.log('Error: '+ error);
  }
}

function callbackWeather(error, responseW) {
  if (!error) {
    console.log("Fetching weather data...");
    var stations = JSON.parse(responseW.body);
    if(count == 0){
      console.log("Trying to create entity");
      /*for (var i = 0, len = stations.length; i < len; i++) {

      if(stations[i].station.city == "Torino"){*/
      var optionsCreate = create_entity.create_entity(weather_Model_create.model(stations[91].station.slug));
      request(optionsCreate, callbackCreate);
      if(subscriptions==true){
        request(options_weather_Subscriptions, function(err){
          if(err)
          console.log(err);
        });
      }
      //}
      //}
    }
    count = 1;

    var data = weather_Model_update.model(stations[91]);
    var optionsUpdate = update_entity.update_entity(data,stations[91].station.slug);
    request(optionsUpdate, function callbackupdate(error) {
      if(error){
      console.log(error);
    }
      else{
        console.log("Weather Data Updated...");
      }
    }
  );
}
else {
  console.log('Error: '+ error);
}
}

function callbackTraffic(error, responseT) {
  if (!error) {
    console.log("Fetching traffic data...");
    var parser = new xml2js.Parser();

    parser.parseString(responseT.body, function (err, result) {
      if(err){
        console.log("Error on fetching traffic data: "+err);
      }
      else{
        if(count2 == 0){
          console.log("Trying to create entity");
          /*for (var i = 0, len = stations.length; i < len; i++) {

          if(stations[i].station.city == "Torino"){*/
          var optionsCreate = create_entity.create_entity(traffic_Model_create.model("result.traffic_data.FDT_data[0]"));
          request(optionsCreate, callbackCreate);
          if(subscriptions==true){
            
            request(options_traffic_Subscriptions, function(err){
              if(err)
              console.log(err);
            });
          }


          //}
          //}
        }
        count2 = 1;
        //console.log(result.traffic_data.FDT_data[0])
        var data = traffic_Model_update.model(result.traffic_data.FDT_data[0]);
        var optionsUpdate = update_entity.update_entity(data,"result.traffic_data.FDT_data[0]");
        request(optionsUpdate, function callbackupdate(error) {
          if(error)
          console.log(error)
          else{
            console.log("Traffic Data Updated...");
          }
        }
      );
    }
  });
}
else {
  console.log('Error: '+ error);
}
}



setInterval(function(){
  request(optionsTraffic, callbackTraffic);
  request(optionsWeather, callbackWeather);
}, update_interval);
