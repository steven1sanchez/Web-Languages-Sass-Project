const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const day = document.getElementById("day");
const day_time = document.getElementById("day-time");

let currentYear = new Date().getFullYear();
let myHalloweenParty = new Date(`October 31 ${currentYear} 20:00:00`);
day.textContent = myHalloweenParty.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
day_time.textContent = myHalloweenParty.toLocaleTimeString('en-us', { hour: "numeric", minute: "numeric"});


setInterval(function() {
    let currentTime = new Date();
    let diff = myHalloweenParty - currentTime;
    let d = Math.floor(diff / 24 / 60 / 60 / 1000);
    let h = Math.floor(diff / 60 / 60 / 1000) % 24;
    let m = Math.floor(diff / 60 / 1000) % 60;
    let s = Math.floor(diff / 1000) % 60;
    days.textContent = d;
    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
}, 1000);