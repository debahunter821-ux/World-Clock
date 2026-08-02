function updateTime() {
let moscowElement = document.querySelector("#moscow");
moscowDateElement = moscowElement.querySelector(".date");
moscowTimeElement = moscowElement.querySelector(".time");
moscowDateElement.innerHTML = moment()
  .tz("Europe/Moscow")
  .format("D MMMM YYYY");
moscowTimeElement.innerHTML = moment()
  .tz("Europe/Moscow")
  .format("h:mm:ss [<small>]a[</small>]");

let parisElement = document.querySelector("#paris");
parisDateElement = parisElement.querySelector(".date");
parisTimeElement = parisElement.querySelector(".time");
parisDateElement.innerHTML = moment().tz("Europe/Paris").format("D MMMM YYYY");
parisTimeElement.innerHTML = moment()
  .tz("Europe/Paris")
  .format("h:mm:ss [<small>]a[</small>]");

let sydneyElement = document.querySelector("#sydney");
sydneyDateElement = sydneyElement.querySelector(".date");
sydneyTimeElement = sydneyElement.querySelector(".time");
sydneyDateElement.innerHTML = moment()
  .tz("Australia/Sydney")
  .format("D MMMM YYYY");
sydneyTimeElement.innerHTML = moment()
  .tz("Australia/Sydney")
  .format("h:mm:ss [<small>]a[</small>]");
}
updateTime();
setInterval(updateTime, 1000);