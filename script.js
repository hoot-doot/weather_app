function openNav() {
  // changes width to make the side nav visible
  document.getElementById("mySidenav").style.width = "460px";
}


function closeNav() {
  // changes width to 0 to close
  document.getElementById("mySidenav").style.width = "0";
}

// function to store data in local storage
function localStr() {
  let freshness = Math.round((Date.now() - localStorage.when)/1000) + " second(s)";
  console.log(freshness);
  const feels_like = localStorage.getItem("feels_like");
  const pressure = localStorage.getItem("pressure");
  const humidity = localStorage.getItem("humidity");
  const main = localStorage.getItem("main");
  const wind_speed = localStorage.getItem("wind_speed");
  const wind_deg = localStorage.getItem("wind_deg");
  const wind_gust = localStorage.getItem("wind_gust");
  const sunrise = localStorage.getItem("sunrise");
  const sunset = localStorage.getItem("sunset");
  const temp = localStorage.getItem("temp");
  const desc = localStorage.getItem("desc");
  const hour0 = localStorage.getItem("hour0");
  const hour1 = localStorage.getItem("hour1");
  const hour2 = localStorage.getItem("hour2");
  const hour3 = localStorage.getItem("hour3");
  const hour4 = localStorage.getItem("hour4");
  const hour5 = localStorage.getItem("hour5");
  const tomorrowTemp = localStorage.getItem("tomorrowTemp");
  const afterTemp = localStorage.getItem("afterTemp");
  const tomorrowURL = localStorage.getItem("tomorrowURL");
  const d_after_URL = localStorage.getItem("d_after_URL");
  const hourly0_URL = localStorage.getItem("hourly0_URL");
  const hourly1_URL = localStorage.getItem("hourly1_URL");
  const hourly2_URL = localStorage.getItem("hourly2_URL");
  const hourly3_URL = localStorage.getItem("hourly3_URL");
  const hourly4_URL = localStorage.getItem("hourly4_URL");
  const hourly5_URL = localStorage.getItem("hourly5_URL");

  document.getElementById("feels_like").innerText = feels_like + " °C";
  document.getElementById("pressure").innerHTML = pressure + " hpa";
  document.getElementById("humidity").innerHTML = humidity + "%";
  document.getElementById("main").innerHTML = main;
  document.getElementById("wind_speed").innerHTML = wind_speed + " m/s";
  document.getElementById("wind_deg").innerHTML = wind_deg;
  document.getElementById("wind_gust").innerHTML = wind_gust;
  document.getElementById("sunrise").innerHTML = sunrise;
  document.getElementById("sunset").innerHTML = sunset;
  document.querySelector(".temp").innerHTML = temp+"&#176;";
  document.querySelector(".condition").innerHTML = desc;
  document.querySelector(".nowtemp0").innerHTML = hour0+"&#176;C";
  document.querySelector(".nowtemp1").innerHTML = hour1+"&#176;C";
  document.querySelector(".nowtemp2").innerHTML = hour2+"&#176;C";
  document.querySelector(".nowtemp3").innerHTML = hour3+"&#176;C";
  document.querySelector(".nowtemp4").innerHTML = hour4+"&#176;C";
  document.querySelector(".nowtemp5").innerHTML = hour5+"&#176;C";
  document.querySelector(".d_tomorrow-temp").innerHTML = tomorrowTemp+"&#176;";
  document.querySelector(".d_after-temp").innerHTML = afterTemp+"&#176;";
  document.querySelector(".d_tomorrow-img").src = tomorrowURL;
  document.querySelector(".d_after-img").src = d_after_URL;
  document.querySelector(".img0").src = hourly0_URL;
  document.querySelector(".img1").src = hourly1_URL;
  document.querySelector(".img2").src = hourly2_URL;
  document.querySelector(".img3").src = hourly3_URL;
  document.querySelector(".img4").src = hourly4_URL;
  document.querySelector(".img5").src = hourly5_URL;

  weather_bg(main);
}

// function to fetch data from api
function weather_api() {
  fetch("http://localhost/wa2/extraction.php") 
  .then((response) => response.json()) // converts to json
  .then((data) => {
      console.log("local storage updated");
      const main = data[0].main; // inside the data extracts the required values from the keys
      const desc = data[0].desc;
      const temp = data[0].temp;
      const pressure = data[0].pressure;
      const humidity = data[0].humidity;
      const feels_like = data[0].feels_like;
      const sunrise = data[0].sunrise;
      const wind_gust = data[0].wind_gust;
      const sunset = data[0].sunset;
      const wind_speed = data[0].wind_speed;
      const wind_deg = data[0].wind_deg;

      // add desc data to local storage
      window.localStorage.setItem("main",main);
      window.localStorage.setItem("desc",desc);
      window.localStorage.setItem("temp",temp);
      window.localStorage.setItem("pressure",pressure);
      window.localStorage.setItem("humidity",humidity);
      window.localStorage.setItem("feels_like",feels_like);
      window.localStorage.setItem("sunrise",sunrise);
      window.localStorage.setItem("wind_gust",wind_gust);
      window.localStorage.setItem("sunset",sunset);
      window.localStorage.setItem("wind_speed",wind_speed);
      window.localStorage.setItem("wind_deg",wind_deg);
      window.localStorage.when = Date.now();

      var hour0 = data[0].hour0;
      var hour1 = data[0].hour1;
      var hour2 = data[0].hour2;
      var hour3 = data[0].hour3;
      var hour4 = data[0].hour4;
      var hour5 = data[0].hour5;
      var tomorrowTemp = data[0].tomorrowTemp;
      var afterTemp = data[0].afterTemp;

      // add dashboard data to local storage
      window.localStorage.setItem("hour0",hour0);
      window.localStorage.setItem("hour1",hour1);
      window.localStorage.setItem("hour2",hour2);
      window.localStorage.setItem("hour3",hour3);
      window.localStorage.setItem("hour4",hour4);
      window.localStorage.setItem("hour5",hour5);
      window.localStorage.setItem("tomorrowTemp",tomorrowTemp);
      window.localStorage.setItem("afterTemp",afterTemp);

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

      const d_tomorrow_img = data[0].d_tomorrow_img; // gets the icons from official openweather documentation
      var tomorrowURL = imgURL + d_tomorrow_img + imgFormat;
      document.querySelector(".d_tomorrow-img").src = tomorrowURL;

      const d_after_img = data[0].d_after_img;
      var d_after_URL = imgURL + d_after_img + imgFormat;
      document.querySelector(".d_after-img").src = d_after_URL;


      const hourly0_img = data[0].hourly0_img;
      var hourly0_URL = imgURL + hourly0_img + imgFormat;
      document.querySelector(".img0").src = hourly0_URL;

      const hourly1_img = data[0].hourly1_img;
      var hourly1_URL = imgURL + hourly1_img + imgFormat;
      document.querySelector(".img1").src = hourly1_URL;

      const hourly2_img = data[0].hourly2_img;
      var hourly2_URL = imgURL + hourly2_img + imgFormat;
      document.querySelector(".img2").src = hourly2_URL;

      const hourly3_img = data[0].hourly3_img;
      var hourly3_URL = imgURL + hourly3_img + imgFormat;
      document.querySelector(".img3").src = hourly3_URL;

      const hourly4_img = data[0].hourly4_img;
      var hourly4_URL = imgURL + hourly4_img + imgFormat;
      document.querySelector(".img4").src = hourly4_URL;

      const hourly5_img = data[0].hourly5_img;
      var hourly5_URL = imgURL + hourly5_img + imgFormat;
      document.querySelector(".img5").src = hourly5_URL;
  
      // add img data to local storage
      window.localStorage.setItem("tomorrowURL",tomorrowURL);
      window.localStorage.setItem("d_after_URL",d_after_URL);
      window.localStorage.setItem("hourly0_URL",hourly0_URL);
      window.localStorage.setItem("hourly1_URL",hourly1_URL);
      window.localStorage.setItem("hourly2_URL",hourly2_URL);
      window.localStorage.setItem("hourly3_URL",hourly3_URL);
      window.localStorage.setItem("hourly4_URL",hourly4_URL);
      window.localStorage.setItem("hourly5_URL",hourly5_URL);


      document.getElementById("feels_like").innerText = feels_like + " °C";
      document.getElementById("pressure").innerHTML = pressure + " hpa";
      document.getElementById("humidity").innerHTML = humidity + "%";
      document.getElementById("main").innerHTML = main;
      document.getElementById("wind_speed").innerHTML = wind_speed + " m/s";
      document.getElementById("wind_deg").innerHTML = wind_deg;
      document.getElementById("wind_gust").innerHTML = wind_gust;
      document.getElementById("sunrise").innerHTML = sunrise;
      document.getElementById("sunset").innerHTML = sunset;

      weather_bg(main);
  });
}

// function for client side time and changing bg according to time
function time_bg() {
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

  
  var time_condition = timeNow; // from the current times checks if night day sunrise or sunset
  if (timeNow < 2 || timeNow > 18){
    time_condition = "Night";
  } else if (timeNow > 14){
    time_condition = "Set";
  } else if (timeNow > 8){
    time_condition = "Day";
  } else {
    time_condition = "Rise";
  }

  document.querySelector(".now1").innerHTML = time1;
  document.querySelector(".now2").innerHTML = time2;
  document.querySelector(".now3").innerHTML = time3;
  document.querySelector(".now4").innerHTML = time4;
  document.querySelector(".now5").innerHTML = time5;
  document.getElementById("time_").innerHTML = timeNow + " : "+ min;

  document.getElementById("date").innerText = day + "/" + month + "/" + year;
  
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
};

// function to change weather images according to weather condition
function weather_bg(main) {
  switch(main) {
    // based on main weather condition changes the main icon and if the criterias are met places an image
    case "Clouds":
      document.getElementById("icon").src = "./img/Vector.png";
      document.querySelector(".grid").style.backgroundImage = "url('./pics/cloud.png')";
      break

    case "Rain":
      document.getElementById("icon").src = "./pics/rains.png";
      document.querySelector(".grid").style.backgroundImage = "url('./pics/rain.png')";
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
      document.querySelector(".grid").style.backgroundImage = "url('')";
      break
    
    default:
      document.getElementById("icon").src = "./img/Vector.png";
      break
    }
  }

// main 
(function main() {
  time_bg()
  // check if the local storage is not empty and created before 5 mins
  if(localStorage.when != null
    && (parseInt(localStorage.when) + (60000*5) > Date.now())) {
      localStr(); // if true
  } 
  else {
    weather_api(); // if false
  }
})();
