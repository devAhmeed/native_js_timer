"use strict";

// Elements 
const daysEl = document.querySelector(".days");
const hourEl = document.querySelector(".hours");
const minsEl = document.querySelector(".mins");
const secondsEl = document.querySelector(".seconds");
/////////////////////////////////////////////






setInterval(function(){
  const now = new Date();
  const date = new Date(2023 , 6 , 10 , 10);
  const rem = date - now;
  const oneDay= 24*60*60*1000;
  const oneHour = 60*60*1000;
  const oneMin = 60*1000;
  const secondsLeft = Math.trunc(rem / 1000);
  const minsLeft = Math.trunc(rem / oneMin);
  const hoursLeft = Math.trunc(rem / oneHour);
  const daysLeft = Math.trunc(rem / oneDay);
  daysEl.textContent = `${daysLeft} Days`;
  hourEl.textContent = `${hoursLeft} Hours`;
  minsEl.textContent = `${minsLeft} Minutes`;
  secondsEl.textContent = `${secondsLeft} Seconds`;
},1000)
