"use strict";

window.onload = function () {

    let seconds = 0;
    let tens = 0;

    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");

    let interval;

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function() {
        clearInterval(interval);
    };

    buttonReset.onclick = function() {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        updateDisplay();
    };

    function startTimer() {
        tens++;

        if (tens > 99) {
            seconds++;
            tens = 0;
        }

        updateDisplay();
    }

    function updateDisplay() {
        appendTens.innerHTML = (tens < 10) ? "0" + tens : tens;
        appendSeconds.innerHTML = (seconds < 10) ? "0" + seconds : seconds;
    }
};
