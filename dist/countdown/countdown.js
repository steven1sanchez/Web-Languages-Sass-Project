const countdown = document.getElementById("countdown");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const day = document.getElementById("day");
const day_time = document.getElementById("day-time");
const party_title = document.getElementById("party-title");
const body = document.getElementsByTagName("body")[0];
let holidayParties = [
    {
        title: "Halloween",
        date: "October 31",
        time: "20:00:00",
        bgImage: "https://images.unsplash.com/photo-1631531773576-ab55620ed211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
    },
    {
        title: "New Years",
        date: "January 1",
        time: "00:00:00",
        bgImage: "https://images.unsplash.com/photo-1628827914238-14777320dd11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80"
    },
    {
        title: "4th of July",
        date: "July 4",
        time: "12:00:00",
        bgImage: "https://images.unsplash.com/photo-1521478413868-1bbd982fa4a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    }
];

let currentYear = new Date().getFullYear();
let nextParty;
let diff = 0;
let currentTime = new Date();
let smallestDiff = Number.MAX_VALUE;
for(let i = 0; i < holidayParties.length; i++) {
    let tempParty = new Date(`${holidayParties[i].date} ${currentYear} ${holidayParties[i].time}`);
    let dec31 = new Date(`December 31 ${currentYear - 1} 23:59:00`);
    if(tempParty > dec31 && tempParty < new Date()) {
        tempParty = new Date(`${holidayParties[i].date} ${currentYear + 1} ${holidayParties[i].time}`);
    }
    diff = tempParty - currentTime;
    if(diff < smallestDiff){
        smallestDiff = diff;
        nextParty = holidayParties[i];
    }
}

let nextPartyDate = new Date(`${nextParty.date} ${currentYear} ${nextParty.time}`);
day.textContent = nextPartyDate.toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"});
day_time.textContent = nextPartyDate.toLocaleTimeString('en-us', { hour: "numeric", minute: "numeric"});
party_title.textContent = `Steven's ${nextParty.title}  Party`;
body.style.backgroundImage = `url(${nextParty.bgImage})`;
document.title = `Steven's ${nextParty.title}  Party`

setInterval(function() {
        currentTime = new Date();
    let diff = nextPartyDate - currentTime;
    let msPerSecond = 1000;
    let secPerMinute = msPerSecond * 60;
    let minPerHour = secPerMinute * 60;
    let hourInDay = minPerHour * 24

    let d = Math.floor(diff / hourInDay);
    let h = Math.floor(diff /minPerHour) % 24;
    let m = Math.floor(diff / secPerMinute) % 60;
    let s = Math.floor(diff / msPerSecond) % 60;
    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;
}, 1000);