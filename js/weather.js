$(document).ready(function(){
  
    var getCity = function(data){
        
   //getting data from the Api(in JSON Format)
    var city = data.city;
    var lat = data.lat;
    var lon = data.lon;
    var country = data.country;

    /*display my current location*/
    $(".location").text(city+", " + country);
        
    // url for open weather Api
    var url =  'http://api.openweathermap.org/data/2.5/weather?'+'lat=' + lat + '&lon=' + lon + '&APPID=f7ec8f9583b86d92616709a348288dc3';
    
        
     var units = 'imperial';
        
    //this function get every information about the current location weather
     var getCurrentWeather = function(data){
     var code = data.weather[0].icon;
     var images = '<img src="http://openweathermap.org/img/w/' + code + '.png" alt="Weather Icon">' ; 
     var temp = data.main.temp;
         
        
     // becos the raw data from free Api is In Kelvin 
         //conver kelvin to Celsius
     var tempCelsius =Math.round(temp - 273.15);
         
         //conver Celsius to Fahrenheit
     var tempFre = (1.8*tempCelsius+32);
         
     var description = data.weather[0].description;    
     var windUnit = units === 'metric' ? ' meters/s' : ' miles/h';
     var wspeed = data.wind.speed;
     var humidity = "Humidity "+data.main.humidity + "%";
         
        //display the gathered information.
            $(".description").text("Description: "+ description);
            $(".deg").html(tempCelsius + '&deg;' + "C");
            $(".images").html(images);
            $(".wind").html(wspeed + windUnit);
            $(".humidity").html(humidity);
         
          //-----------change to Celsius when clicked-------
            $(".C").click(function() {
               $(".deg").html(tempCelsius + '&deg;' + "C"); 
                
            });
         
         //-------------change to Fahrenheit when clicked-----
          $(".F").click(function() {
                $(".deg").html(tempFre+'&deg;' + "F"); 
            });
         //-----Change background weather depend on the descrpition-------------
         var bgim = 'url("https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178307/Kerry-Park-61617.jpg")';
         var bg = ['url("http://wallpoper.com/images/00/37/46/99/lights-rain_00374699.jpg")','url("http://media.jrn.com/images/cloudy+skyline_1440892057022_23373091_ver1.0_640_480.jpg")','url("http://images.fineartamerica.com/images-medium-large-5/clear-mountain-sky-daniel-pivonka.jpg")','url("https://upload.wikimedia.org/wikipedia/commons/2/2f/Overcast_Mehamn.jpg")','url("http://www.pelfusion.com/wp-content/uploads/2009/07/cloudy.jpg")','url("http://71.18.74.5/wp-content/uploads/2013/05/Sunny-Day.jpg")','url("https://images.trvl-media.com/media/content/shared/images/travelguides/destination/178307/Kerry-Park-61617.jpg")','url("http://plentymore.files.wordpress.com/2012/08/bigstock-heart-from-cloud-o.gif")'];
         if(description === "light rain"){
            $('body').css('background-image',bg[0]);
         }else if(description === "mostly cloudy"){
              $('body').css('background-image',bg[1]);
             
         }else if(description === "clear sky"){
              $('body').css('background-image',bg[2]);
             
         }
         else if(description === "overcast clouds"){
              $('body').css('background-image',bg[3]);
             
         }
          else if(description === "cloudy"){
              $('body').css('background-image',bg[4]);
             
         }else if(description === "sunny"){
              $('body').css('background-image',bg[5]);
         }else if(description === "broken clouds"){
             $('body').css('background-image',bg[7]);
             $(".description").css("color","red");
         }
         else{
             $('body').css('background-image',bg[6]);
         }
     
    };

     $(document).ready(function() {
      $.getJSON(url , getCurrentWeather, 'jsonp');
    });
  
    
    
};
    
     $(document).ready(function() {
      $.getJSON('http://ip-api.com/json',getCity,'jsonp');
    });
    
    
    
});