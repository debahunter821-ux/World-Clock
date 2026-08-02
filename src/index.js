function updateTime() {
  let moscowElement = document.querySelector("#moscow");
  if (moscowElement) {
    moscowDateElement = moscowElement.querySelector(".date");
    moscowTimeElement = moscowElement.querySelector(".time");
    moscowDateElement.innerHTML = moment()
      .tz("Europe/Moscow")
      .format("D MMMM YYYY");
    moscowTimeElement.innerHTML = moment()
      .tz("Europe/Moscow")
      .format("h:mm:ss [<small>]a[</small>]");
  }

  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    parisDateElement = parisElement.querySelector(".date");
    parisTimeElement = parisElement.querySelector(".time");
    parisDateElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("D MMMM YYYY");
    parisTimeElement.innerHTML = moment()
      .tz("Europe/Paris")
      .format("h:mm:ss [<small>]a[</small>]");
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    sydneyDateElement = sydneyElement.querySelector(".date");
    sydneyTimeElement = sydneyElement.querySelector(".time");
    sydneyDateElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("D MMMM YYYY");
    sydneyTimeElement.innerHTML = moment()
      .tz("Australia/Sydney")
      .format("h:mm:ss [<small>]a[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "Current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("D MMMM YYYY")}</div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]a[</small>]")}</div>
    </div>
    <a href="/" class="back-link">Back to first page</a>
`;
}

updateTime();
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city-select");

citySelectElement.addEventListener("change", function (event) {
  updateCity(event);
});
