async function weatherData(place) {
  loader.style.display = "flex";
  if (tempOption === 0) {
    defaultTemp = "uk";
  } else if (tempOption === 1) {
    defaultTemp = "us";
  }

  const serverData = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=55M43DUZ6BFPEWYRKFQAZZY3L&unitGroup=${defaultTemp}`
  );

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const serverDataJSON = await serverData.json();
  loader.style.display = "none";
  return serverDataJSON;
}

let loader = document.querySelector(".loader");
let Celcius = document.querySelector(".Celcius");
let Farenheit = document.querySelector(".Farenheit");
let symbol = "C";
Celcius.addEventListener("click", () => {
  Celcius.classList.add("Selected");
  Farenheit.classList.remove("Selected");
  tempOption = 0;
  symbol = "C";
  appSearch();
});
Farenheit.addEventListener("click", () => {
  Celcius.classList.remove("Selected");
  Farenheit.classList.add("Selected");
  tempOption = 1;
  symbol = "F";
  appSearch(

  );
});

let tempOption = 0;
let defaultTemp = "uk";

document.addEventListener("DOMContentLoaded", () => {
  currentLocation();
});

function currentLocation() {
  navigator.geolocation.getCurrentPosition(async (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const place = await addressName(latitude, longitude);
    CntUpdate(place);
  });
}

function SideBarUpdate(place) {
  weatherData(place).then(async function (response) {
    //SideBar Update
    //mainIcon Update
    let mainIcon = document.querySelector("#mainIcon");
    mainIcon.src = `./assets/${response.currentConditions.icon}.svg`;

    //Temp Update
    let currentTemp = document.querySelector(".temp");
    currentTemp.innerHTML =
      response.currentConditions.temp + ` <sup>° ${symbol}</sup>`;

    //Date Update
    let currentDate = document.querySelector(".date");
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d = new Date();
     currentDate.innerHTML=weekday[d.getDay()]+", "+d.getHours()+":"+d.getMinutes();

    //Feature Update

    let condImg = document.querySelector("#condImg");
    let condDisc = document.querySelector("#condDisc");
    condImg.src = `./assets/${response.currentConditions.icon}.svg`;
    condDisc.innerHTML = response.description;

    let rainImg = document.querySelector("#rainImg");
    let rainDisc = document.querySelector("#rainDisc");
    rainImg.src = "./assets/rain.svg";
    rainDisc.innerHTML =
      "Rain - " + response.currentConditions.precipprob + "%";

    //Location Update
    let loc = document.querySelector(".place");
    place =  await addressName(response.latitude,response.longitude);
    loc.innerHTML = place;

    //Main Update
  });
}

async function addressName(lat, lon) {
  let serverData = await fetch(
    `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=7c8ff2b3fd3b455f1d44b1907bf940f3`
  );
  let data = await serverData.json();
  return data[0].name + ", " + data[0].country;
}

function HighlightUpdate(place) {
  weatherData(place).then(function (response) {
    //Humidty Update
    let humidity = document.querySelector("#Humidity");
    humidity.innerHTML = response.currentConditions.humidity + "<sup>%</sup>";

    //Sunrise & Sunset Update
    let sunrise = document.querySelector(".sunrise");
    let sunset = document.querySelector(".sunset");

    sunrise.innerHTML = response.currentConditions.sunrise.slice(0, 5);
    sunset.innerHTML = response.currentConditions.sunset.slice(0, 5);

    //Wind Update
    let wind = document.querySelector("#Wind");
    wind.innerHTML = response.currentConditions.windspeed + "MPH";

    //AQI update
    let air = document.querySelector("#UV");
    air.innerHTML = response.currentConditions.uvindex;
  });
}
let todayOption = document.querySelector("#Today");
let weekOption = document.querySelector("#Week");

todayOption.addEventListener("click", () => {
  option = 0;
  appSearch();
});
weekOption.addEventListener("click", () => {
  option = 1;
  appSearch();
});

let option = 0;

function MainOptionUpdate(place) {
  weatherData(place).then(function (response) {
    let headerHighlight = document.querySelector(".headerHighlight");

    if (option === 0) {
      weekOption.classList.remove("selectedOption");
      todayOption.classList.add("selectedOption");
      headerHighlight.innerHTML = "";
      let date = new Date();
      let hour = date.getHours();
      let i = 1;

      while (hour < 24 && i < 8) {
        let tile = document.createElement("div");
        tile.className = "tile";
        tile.id = i;

        let tileHead = document.createElement("div");
        tileHead.className = "tileHead";
        tileHead.innerHTML = response.days[0].hours[hour].datetime.slice(0, 5);

        let tileIcon = document.createElement("div");
        tileIcon.className = "tileIcon";
        let tileImg = document.createElement("img");
        tileImg.src = `./assets/${response.days[0].hours[hour].icon}.svg`;
        tileIcon.appendChild(tileImg);

        let tileTemp = document.createElement("div");
        tileTemp.className = "tileTemp";
        tileTemp.innerHTML = response.days[0].hours[hour].temp + "<sup>°</sup>";

        tile.appendChild(tileHead);
        tile.appendChild(tileIcon);
        tile.appendChild(tileTemp);

        headerHighlight.appendChild(tile);

        hour++;
        i++;
      }
    } else if (option === 1) {
      headerHighlight.innerHTML = "";
      weekOption.classList.add("selectedOption");
      todayOption.classList.remove("selectedOption");
      const month = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ];

      for (let i = 1; i < 8; i++) {
        let tile = document.createElement("div");
        tile.className = "tile";
        tile.id = i;

        let date = new Date(response.days[i].datetime);
        let tileHead = document.createElement("div");
        tileHead.className = "tileHead";
        tileHead.innerHTML = `${month[date.getMonth()]}, ${date.getDate()}`;

        let tileIcon = document.createElement("div");
        tileIcon.className = "tileIcon";
        let tileImg = document.createElement("img");
        tileImg.src = `./assets/${response.days[i].icon}.svg`;
        tileIcon.appendChild(tileImg);

        let tileTemp = document.createElement("div");
        tileTemp.className = "tileTemp";

        let tempHigh = document.createElement("div");
        tempHigh.className = "tempHigh";
        tempHigh.innerHTML = response.days[i].tempmax + "<sup>° </sup>";

        let tempLow = document.createElement("div");
        tempLow.className = "tempLow";
        tempLow.innerHTML = response.days[i].tempmin + "<sup>° </sup>";

        tileTemp.appendChild(tempHigh);
        tileTemp.appendChild(tempLow);

        tile.appendChild(tileHead);
        tile.appendChild(tileIcon);
        tile.appendChild(tileTemp);

        headerHighlight.appendChild(tile);
      }
    }
  });
}

function CntUpdate(place) {
  SideBarUpdate(place);
  HighlightUpdate(place);
  MainOptionUpdate(place);
}



let search=document.querySelector("input");
search.addEventListener("keydown",(e)=>{
    if(e.key=="Enter"){
        place=search.value;
        appSearch()
        search.value="";
    }
})
let place="";

function appSearch(){
    if(place!=""){
        CntUpdate(place)
        weatherData(place).catch(err=>{
        alert("Can not get data");
        alert("Redirecting to your Location")
        currentLocation()
})
    }
    else{
        currentLocation()
    }
}

