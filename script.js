//ASSIGNMENT 1
const iconElement = document.querySelector("#location-icon")
const temperatureElement = document.querySelector("#temperature-value")
const descriptionElement = document.querySelector("#temperature-description")
const cityname = document.querySelector("#cityname")
const tempminelement = document.querySelector("#tempmin")
const tempmaxelement = document.querySelector("#tempmax")
const humidityelement = document.querySelector("#humidity")
const enterbutton = document.querySelector("#clickbutton")
const searchbar = document.querySelector("#search")
const timetext = document.querySelector("#currenttime")

setInterval(() => {
    const time = new Date();
    timetext.innerText = time
}, 1000);

let weather = {
    apiKey: "29ca9ea9f6444ce633a4839afec9db0a",
    fetchWeather: function(zipcode){
        fetch("https://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity, temp_min, temp_max } = data.main;
        console.log(name, icon, description, temp, humidity, temp_min, temp_max)
        cityname.innerHTML = `<h1>${name}</h1>`;
        iconElement.src = "https://openweathermap.org/img/wn/"+ icon +"@2x.png"
        temperatureElement.innerHTML = `<h2>${temp}°F</h2>`
        descriptionElement.innerText = description;
        tempminelement.innerText = `Lowest: ${temp_min}°F`;
        tempmaxelement.innerText = `Highest: ${temp_max}°F`;
        humidityelement.innerText = `Humidity: ${humidity}%`

    },

    search: function () {
        this.fetchWeather(searchbar.value);
    }
}

enterbutton.addEventListener("click", function(){
weather.search();
document.querySelector("#weatherinfo").classList.remove("invisible")
})

searchbar.addEventListener("keyup", function(event) {
    if( event.key == "Enter") {
        weather.search();
        document.querySelector("#weatherinfo").classList.remove("invisible")
    }
    
})

//ASSIGNMENT2

const iconElement1 = document.querySelector("#location-icon1")
const temperatureElement1 = document.querySelector("#temperature-value1")
const descriptionElement1 = document.querySelector("#temperature-description1")
const cityname1 = document.querySelector("#cityname1")
const tempminelement1 = document.querySelector("#tempmin1")
const tempmaxelement1 = document.querySelector("#tempmax1")
const humidityelement1 = document.querySelector("#humidity1")

const iconElement2 = document.querySelector("#location-icon2")
const temperatureElement2 = document.querySelector("#temperature-value2")
const descriptionElement2 = document.querySelector("#temperature-description2")
const cityname2 = document.querySelector("#cityname2")
const tempminelement2 = document.querySelector("#tempmin2")
const tempmaxelement2 = document.querySelector("#tempmax2")
const humidityelement2 = document.querySelector("#humidity2")

const iconElement3 = document.querySelector("#location-icon3")
const temperatureElement3 = document.querySelector("#temperature-value3")
const descriptionElement3 = document.querySelector("#temperature-description3")
const cityname3 = document.querySelector("#cityname3")
const tempminelement3 = document.querySelector("#tempmin3")
const tempmaxelement3 = document.querySelector("#tempmax3")
const humidityelement3 = document.querySelector("#humidity3")

let latitude = 0.0
let longtitude = 0.0

let geocodingweather = {
    apiKey: "29ca9ea9f6444ce633a4839afec9db0a",
    fetchcity: function(cityname, statecode){
        fetch("http://api.openweathermap.org/geo/1.0/direct?q="+cityname+","+statecode+",us&limit=5&us&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.coordinates(data));
    },
    coordinates: function (data) {
        const {lat, lon} = data[0]
        return this.fetchweather(lat,lon)
    },
  
    fetchweather: function(latitude, longtitude){        
        fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon="+ longtitude + "&units=imperial&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather1(data));
    },

    displayWeather1: function(data) {
        const name0 = data.city.name;
        const icon0 = data.list[0].weather[0].icon;
        const description0 = data.list[0].weather[0].description;
        const temp0 = data.list[0].main.temp;
        const humidity0 = data.list[0].main.humidity;
        const temp_min0 = data.list[0].main.temp_min;
        const temp_max0 = data.list[0].main.temp_max;
        cityname1.innerHTML = `<h1>${name0}</h1>`;
        iconElement1.src = "https://openweathermap.org/img/wn/"+ icon0 +"@2x.png"
        temperatureElement1.innerHTML = `<h2>${temp0}°F</h2>`
        descriptionElement1.innerText = description0;
        tempminelement1.innerText = `Lowest: ${temp_min0}°F`;
        tempmaxelement1.innerText = `Highest: ${temp_max0}°F`;
        humidityelement1.innerText = `Humidity: ${humidity0}%`;

        const name1 = data.city.name;
        const icon1 = data.list[1].weather[0].icon;
        const description1 = data.list[1].weather[0].description;
        const temp1 = data.list[1].main.temp;
        const humidity1 = data.list[1].main.humidity;
        const temp_min1 = data.list[1].main.temp_min;
        const temp_max1 = data.list[1].main.temp_max;
        cityname2.innerHTML = `<h1>${name1}</h1>`;
        iconElement2.src = "https://openweathermap.org/img/wn/"+ icon1 +"@2x.png"
        temperatureElement2.innerHTML = `<h2>${temp1}°F</h2>`
        descriptionElement2.innerText = description1;
        tempminelement2.innerText = `Lowest: ${temp_min1}°F`;
        tempmaxelement2.innerText = `Highest: ${temp_max1}°F`;
        humidityelement2.innerText = `Humidity: ${humidity1}%`;

        const name2 = data.city.name;
        const icon2 = data.list[2].weather[0].icon;
        const description2 = data.list[2].weather[0].description;
        const temp2 = data.list[2].main.temp;
        const humidity2 = data.list[2].main.humidity;
        const temp_min2 = data.list[2].main.temp_min;
        const temp_max2 = data.list[2].main.temp_max;
        cityname3.innerHTML = `<h1>${name2}</h1>`;
        iconElement3.src = "https://openweathermap.org/img/wn/"+ icon2 +"@2x.png"
        temperatureElement3.innerHTML = `<h2>${temp2}°F</h2>`
        descriptionElement3.innerText = description2;
        tempminelement3.innerText = `Lowest: ${temp_min2}°F`;
        tempmaxelement3.innerText = `Highest: ${temp_max2}°F`;
        humidityelement3.innerText = `Humidity: ${humidity2}%`;
    },

    
}


enterbutton.addEventListener("click", function(){
    weatherdaily.search();
    document.querySelector("#weatherinfo").classList.remove("invisible")
    })
    
    searchbar.addEventListener("keyup", function(event) {
        if( event.key == "Enter") {
            weatherdaily.search();
            document.querySelector("#weatherinfo").classList.remove("invisible")
        }
        
    })