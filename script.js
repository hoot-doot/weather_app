function openNav() {
    document.getElementById("mySidenav").style.width = "32%";
  }
  

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  function open_about() {
    document.getElementById("aboutlinks").style.height = "32%";
  }


(function weather_api() {
  let file = "https://api.openweathermap.org/data/2.5/onecall?lat=29.3088&lon=80.5911&units=metric&exclude=minutely,alerts&appid=b40d8f05585be5b580c1098cd73754d7";
  fetch(file)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
      const main = data.current.weather[0].main;
      const desc = data.current.weather[0].description;
      const temp = Math.round(data.current.temp);
      const pressure = data.current.pressure;
      const humidity = data.current.humidity;
          
      console.log(main);
      console.log(desc);
      console.log(temp);
      console.log(pressure);
      console.log(humidity);

      var hour0 = Math.round(data.hourly[0].temp);
      var hour1 = Math.round(data.hourly[1].temp);
      var hour2 = Math.round(data.hourly[2].temp);
      var hour3 = Math.round(data.hourly[3].temp);
      var hour4 = Math.round(data.hourly[4].temp);
      var hour5 = Math.round(data.hourly[5].temp);

      var tomorrowTemp = Math.round(data.daily[1].temp.day)
      var afterTemp = Math.round(data.daily[2].temp.day)

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



      const imgURL = "http://openweathermap.org/img/wn/";
      const imgFormat = ".png";

      const d_tomorrow_img = data.daily[1].weather[0].icon;
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


      const timeNow = new Date().getHours();
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

      document.querySelector(".time").innerHTML = timeNow + ":"+ min;
      document.getElementById("date").innerText = day + "/" + month + "/" + year;
      console.log(day + "/" + month + "/" + year);
      
  });
})();

