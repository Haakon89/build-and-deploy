import {  getSecondsLeftOfYear, getTimeString, getMinutesLeftOfYear } from "./clock";

const timeContainer = document.getElementById("time");
const timeLeft = document.getElementById("seconds-left");
const timeLeftMin = document.getElementById("minutes-left");

const render = () => {
  const now = new Date();
  timeLeft.innerText = getSecondsLeftOfYear(now);
  timeContainer.innerText = getTimeString(now);
  timeLeftMin.innerText = getMinutesLeftOfYear(now);
}

render();
setInterval(render, 1000);