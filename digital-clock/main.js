"use strict";

const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const tageszeitEl = document.getElementById("tageszeit");

function updateClock () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let tageszeit = "AM";

    if(h >= 6 && h < 12) {
        tageszeit = "Morgens";
    }
    else if(h >= 12 && h < 15) {
        tageszeit = "Mittags";
    }
    else if(h >= 15 && h < 18) {
        tageszeit = "Nachmittags";
    }    
    else if(h >= 18 && h < 22) {
        tageszeit = "Abends";
    }
    else {
        tageszeit = "Nachts";
    }
    
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;
    tageszeitEl.innerText = tageszeit;
    setTimeout(() => {
        updateClock();
    }, 1000)
}

updateClock();