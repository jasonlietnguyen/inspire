app.controller('WeatherController', function(WeatherService){
	var wc = this;
	WeatherService.getWeather().then(function(weather){
		wc.weather =  weather.main.temp * 9/5 - 459.67;
        wc.weatherName = weather.name;
        wc.weatherC = weather.main.temp - 273.15;
	})
	// DO NOT EDIT ABOVE
    
})