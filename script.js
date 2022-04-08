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