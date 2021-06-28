let weather = {
    apiKey: "c953c5e75b3fa597a65582934c7c9c32",
    cities: function (city) {
    fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apiKey).then((response) => {return response.json();})
        .then((data) => this.myweather(data));
    },
    myweather: (data)=> {
    const { speed } = data.wind;
    const { name } = data;
    const { temp, humidity } = data.main;
    const { icon, description } = data.weather[0];
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".nhietdo").innerText = temp + "°C";
    document.querySelector(".doam").innerText ="Độ Ẩm: " + humidity + "%";
    document.querySelector(".gio").innerText ="Tốc Độ Gió: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
    let x = document.querySelector(".search-bar").value
    this.cities(x);
    },
};
document.querySelector(".search button").addEventListener("click", ()=> {
    weather.search();
});


