function openNav() {
  // changes with to make the side nav visible
  document.getElementById("mySidenav").style.width = "460px";
}


function closeNav() {
  // changes width to 0 to close
  document.getElementById("mySidenav").style.width = "0";
}



(function weather_api() {
  // self executing function to call api
let file = "https://api.openweathermap.org/data/2.5/onecall?lat=29.3088&lon=80.5911&units=metric&exclude=minutely,alerts&appid=b40d8f05585be5b580c1098cd73754d7";
fetch(file) // gets data
.then((response) => response.json()) // converts to json
.then((data) => {
    const main = data.current.weather[0].main; // inside the data extracts the required values from the keys
    const desc = data.current.weather[0].description;
    const temp = Math.round(data.current.temp);
    const pressure = data.current.pressure;
    const humidity = data.current.humidity;
    const feels_like = data.current.feels_like;
    const sunrise = data.current.sunrise;
    const wind_gust = data.current.wind_gust;
    const sunset = data.current.sunset;
    const wind_speed = data.current.wind_speed;
    const wind_deg = data.current.wind_deg;
    const dew_point = data.current.dew_point;
    const visibility = data.current.visibility;

    var hour0 = Math.round(data.hourly[0].temp);
    var hour1 = Math.round(data.hourly[1].temp);
    var hour2 = Math.round(data.hourly[2].temp);
    var hour3 = Math.round(data.hourly[3].temp);
    var hour4 = Math.round(data.hourly[4].temp);
    var hour5 = Math.round(data.hourly[5].temp);

    var tomorrowTemp = Math.round(data.daily[1].temp.day)
    var afterTemp = Math.round(data.daily[2].temp.day)

    document.querySelector(".temp").innerHTML = temp+"&#176;";  // places extracted data inside the html tags
    document.querySelector(".condition").innerHTML = desc;
    document.querySelector(".nowtemp0").innerHTML = hour0+"&#176;C";
    document.querySelector(".nowtemp1").innerHTML = hour1+"&#176;C";
    document.querySelector(".nowtemp2").innerHTML = hour2+"&#176;C";
    document.querySelector(".nowtemp3").innerHTML = hour3+"&#176;C";
    document.querySelector(".nowtemp4").innerHTML = hour4+"&#176;C";
    document.querySelector(".nowtemp5").innerHTML = hour5+"&#176;C";

    document.querySelector(".d_tomorrow-temp").innerHTML = tomorrowTemp+"&#176;";
    document.querySelector(".d_after-temp").innerHTML = afterTemp+"&#176;";



    const imgURL = "http://openweathermap.org/img/wn/";
    const imgFormat = ".png";

    const d_tomorrow_img = data.daily[1].weather[0].icon; // gets the icons from official openweather documentation
    var tomorrowURL = imgURL + d_tomorrow_img + imgFormat;
    document.querySelector(".d_tomorrow-img").src = tomorrowURL;

    const d_after_img = data.daily[2].weather[0].icon;
    var tomorrowURL = imgURL + d_after_img + imgFormat;
    document.querySelector(".d_after-img").src = tomorrowURL;




    const hourly0_img = data.hourly[0].weather[0].icon;
    var hourly0_URL = imgURL + hourly0_img + imgFormat;
    document.querySelector(".img0").src = hourly0_URL;

    const hourly1_img = data.hourly[1].weather[0].icon;
    var hourly1_URL = imgURL + hourly1_img + imgFormat;
    document.querySelector(".img1").src = hourly1_URL;

    const hourly2_img = data.hourly[2].weather[0].icon;
    var hourly2_URL = imgURL + hourly2_img + imgFormat;
    document.querySelector(".img2").src = hourly2_URL;

    const hourly3_img = data.hourly[3].weather[0].icon;
    var hourly3_URL = imgURL + hourly3_img + imgFormat;
    document.querySelector(".img3").src = hourly3_URL;

    const hourly4_img = data.hourly[4].weather[0].icon;
    var hourly4_URL = imgURL + hourly4_img + imgFormat;
    document.querySelector(".img4").src = hourly4_URL;

    const hourly5_img = data.hourly[5].weather[0].icon;
    var hourly5_URL = imgURL + hourly5_img + imgFormat;
    document.querySelector(".img5").src = hourly5_URL;

    // get current date and time
    const timeNow = new Date().getHours(); // comment this line and uncomment line below to test bg change based on time
    // const timeNow = 12;
    const day = new Date().getDay();
    const min = new Date().getMinutes();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    const time1 = timeNow + 1;
    const time2 = time1 + 1;
    const time3 = time2 + 1;
    const time4 = time3 + 1;
    const time5 = time4 + 1;

    document.querySelector(".now1").innerHTML = time1;
    document.querySelector(".now2").innerHTML = time2;
    document.querySelector(".now3").innerHTML = time3;
    document.querySelector(".now4").innerHTML = time4;
    document.querySelector(".now5").innerHTML = time5;

    var time_condition = timeNow; // from the current times checks if night day sunrise or sunset
    if (timeNow > 19){
      time_condition = "Night";
    } else if (timeNow > 16){
      time_condition = "Set";
    } else if (timeNow > 8){
      time_condition = "Day";
    } else {
      time_condition = "Rise";
    }

    switch(time_condition) {
      // from the current condition based on time changes the backgroung image
      case "Day":
        document.querySelector(".weather_app").style.backgroundImage = "url('./pics/dayfr.png')";
        break
      case "Rise":
        document.querySelector(".weather_app").style.backgroundImage = "url('./pics/risefr.png')";
        break
      case "Set":
        document.querySelector(".weather_app").style.backgroundImage = "url('./pics/setfr.png')";
        break
      default:
        document.querySelector(".weather_app").style.backgroundImage = "url('./pics/night\ fr.png')";
        break
    }

    document.getElementById("time_").innerHTML = timeNow + " : "+ min;
    document.getElementById("feels_like").innerText = feels_like + " °C";
    document.getElementById("pressure").innerHTML = pressure + " hpa";
    document.getElementById("humidity").innerHTML = humidity + "%";
    document.getElementById("main").innerHTML = main;
    document.getElementById("wind_speed").innerHTML = wind_speed + " m/s";
    document.getElementById("wind_deg").innerHTML = wind_deg;
    document.getElementById("wind_gust").innerHTML = wind_gust;
    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;
    document.getElementById("date").innerText = day + "/" + month + "/" + year;

    switch(main) {
      // based on main weather condition changes the main icon and if the criterias are met places an image
      case "Clouds":
        document.getElementById("icon").src = "./img/Vector.png";
        document.querySelector(".grid").style.backgroundImage = "url('./img/Layer\ 27.png')";
        
        break
      case "Rain":
        document.getElementById("icon").src = "./img/Rain.png";
        document.querySelector(".grid").style.backgroundImage = "url('./pics/rain_clouds.png')";

        break
      case "Drizzle":
        document.getElementById("icon").src = "./img/Rain.png";
        document.querySelector(".grid").style.backgroundImage = "url('./pics/rain_clouds.png')";

        break
      case "Thunderstorm":
        document.getElementById("icon").src = "./img/Rain.png";
        document.querySelector(".grid").style.backgroundImage = "url('./pics/rain_clouds.png')";

        break
      case "Clear":
        document.getElementById("icon").src = "./img/Layer 6.png";
        document.getElementById("icon").style.width = "70%";
        break
      default:
        document.getElementById("icon").src = "./img/Vector.png";
        break

    }
});
})();

